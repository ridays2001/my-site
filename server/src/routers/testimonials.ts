import { captureException } from '@sentry/node';
import rateLimit from 'express-rate-limit';
import fetch from 'node-fetch';

// Database and schemas.
import db from '../util/db';
import type { Testimonial } from '../util/schemas';
import { collections } from '../util/schemas';

import express from 'express';
const router = express.Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/', async (_req, res) => {
	const testimonials: Array<Testimonial> = [];
	await db
		.db('main')
		.collection<Testimonial>(collections.testimonials)
		.find()
		.toArray()
		.then(reviews => testimonials.push(...reviews));

	return res.json(testimonials);
});

// 4 max testimonials over the duration of 24 hours.
const limiter = rateLimit({
	max: 4,
	windowMs: 24 * 60 * 60 * 1000,
	message: 'Please do not abuse this service and provide genuine testimonials only.',
	headers: true
});

router.post('/', limiter, (req, res) => {
	if (req.headers.authorization !== (process.env.AUTH as string)) return res.status(401).send('Denied!');
	const { message, name, rating } = req.body as Testimonial | Record<string, undefined>;

	if (!message?.length || !name?.length || !rating) {
		return res.status(400).send('Incomplete Body.');
	}

	if (message.length < 25 || rating < 0 || rating > 5 || name.length < 2) {
		return res.status(400).send('Invalid Body.');
	}

	void db
		.db('main')
		.collection<Testimonial>(collections.testimonials)
		.insertOne({ message, name, rating: Number(rating) });

	void fetch(process.env.WB_Misc as string, {
		method: 'POST',
		body: JSON.stringify({
			tts: false,
			embeds: [
				{
					color: 0x007af5,
					author: { name },
					description: `__**Rating:**__ ${rating}\n__**Message:**__ ${message}`,
					timestamp: new Date()
				}
			]
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	}).catch(err => captureException(err));

	return res.status(201).send('Saved.');
});

export default router;
