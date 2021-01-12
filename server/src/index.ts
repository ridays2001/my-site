// Configure variables in .env file to the environment.
import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import logger from 'morgan';
import db from './util/db';
import testimonials from './routers/testimonials';
import * as sentry from '@sentry/node';
import { join } from 'path';
import rateLimit from 'express-rate-limit';
import contact from './routers/contact';

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

// Trust first proxy.
app.set('trust proxy', 1);

// Use the routers.
app.get('/', (_req, res) => res.end('Hello World!'));
app.use('/contact', contact);
app.use('/testimonials', testimonials);

// Attach sentry error handling middleware.
app.use(sentry.Handlers.errorHandler());

// 404 Errors.
app.use((req, res) => {
	sentry.withScope(scope => {
		scope.setTag('Side', req.url.startsWith('/client') ? 'Client' : 'Server');
		scope.setTag('IP', req.ip);

		sentry.captureMessage(`[404] ${req.url.replace('/client', '')}`);
	});

	return res.status(404).end('Error: Not Found!');
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
