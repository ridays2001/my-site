// Configure variables in .env file to the environment.
import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import logger from 'morgan';
import db from './util/db';

import express from 'express';
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('trust proxy', 1);

app.get('/', (_req, res) => res.send('Hello World!'));

// 404
app.use((_req, res) => res.status(404).end('Error: Not Found!'));

const port = Number(process.env.PORT) || 8080;
app.listen(port, () => {
	void db
		.connect()
		.catch(console.log)
		.then(() => console.log('Successfully connected to the Database.'));

	console.log(`Listening on http://localhost${port === 80 ? '' : port}/`);
});
