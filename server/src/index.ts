// Configure variables in .env file to the environment.
import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import logger from 'morgan';
import cookies from 'cookie-parser';
import db from './util/db';
import testimonials from './routers/testimonials';
import * as sentry from '@sentry/node';
import { join } from 'path';
import rateLimit from 'express-rate-limit';
import contact from './routers/contact';
import blog from './routers/blog';
import parseMd from './util/parseMd';

import express from 'express';
const app = express();

// Initialize sentry for error tracking.
sentry.init({
	dsn: process.env.SENTRY,
	integrations: [new sentry.Integrations.Http({ tracing: true })]
});

// Base Rate Limiter - 100 requests in 10 mins.
const baseLimiter = rateLimit({
	windowMs: 10 * 60 * 1000,
	max: 100,
	message: 'Please slow down.',
	headers: true
});

// Attach middleware.
app.use(sentry.Handlers.requestHandler());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, 'public')));
app.use(baseLimiter);
app.use(cookies(process.env.SECRET));

// Trust first proxy.
app.set('trust proxy', 1);

// Use the routers.
app.get('/', (_req, res) => res.send('Hello World!'));
app.use('/contact', contact);
app.use('/testimonials', testimonials);
app.use('/blog', blog);
app.get('/login/:secret', (req, res) => {
	const { secret } = req.params as { secret?: string };
	if (!secret?.length) return res.status(403).end('Denied!');
	if (secret !== process.env.SECRET) return res.status(403).end('Denied!');
	res.cookie('secret', process.env.SECRET, {
		path: '/',
		signed: true,
		httpOnly: true,
		sameSite: 'strict',
		// 6 hours.
		maxAge: 6 * 60 * 60
	});
	return res.end('Logged in successfully.');
});
app.post('/parse', (req, res) => {
	const { md } = req.body as { md?: string };
	if (!md?.length) return res.status(502).send('Incomplete Body');
	return res.json({ parsed: parseMd(md) });
});

// Attach sentry error handling middleware.
app.use(sentry.Handlers.errorHandler());

// 404 Errors.
app.use((req, res) => {
	sentry.withScope(scope => {
		scope.setTag('Side', req.url.startsWith('/client') ? 'Client' : 'Server');
		scope.setTag('IP', req.ip);

		sentry.captureMessage(`[404] ${req.url.replace('/client', '')}`);
	});

	return res.status(404).send('Error: Not Found!');
});

// Start the server.
const port = Number(process.env.PORT) || 8080;
app.listen(port, () => {
	void db
		.connect()
		.catch(console.log)
		.then(() => console.log('Successfully connected to the Database.'));

	console.log(`Listening on http://localhost${port === 80 ? '' : port}/`);
});
