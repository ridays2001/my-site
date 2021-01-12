// Configure variables in .env file to the environment.
import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import logger from 'morgan';
import db from './util/db';
import router from './router';
import * as sentry from '@sentry/node';
import { join } from 'path';

import express from 'express';
const app = express();

// Initialize sentry for error tracking.
sentry.init({
	dsn: process.env.SENTRY,
	integrations: [new sentry.Integrations.Http({ tracing: true })]
});

// Attach middleware.
app.use(sentry.Handlers.requestHandler());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, 'public')));

// Trust first proxy.
app.set('trust proxy', 1);

// Use the router.
app.use('/', router);

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
