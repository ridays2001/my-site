import rateLimit from 'express-rate-limit';
import db from '../util/db';
import type { Testimonial } from '../util/schemas';

import express from 'express';
const router = express.Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/', async (_req, res) => {
	const testimonials: Array<Testimonial> = [];
	await db
		.db('main')
		.collection<Testimonial>('testimonials')
		.find()
		.toArray()
		.then(reviews => testimonials.push(...reviews));

	return res.json(testimonials);
});

// 1 max testimonial over the duration of 24 hours.
const limiter = rateLimit({
	max: 1,
	windowMs: 24 * 60 * 60 * 1000,
	message: 'Please do not abuse this service and provide genuine testimonials only.',
	headers: true
});

router.post('/', limiter, (req, res) => {
	if (req.headers.authorization !== process.env.AUTH) return res.status(501).end('Denied!');

	const { message, name, rating } = req.body as Testimonial;

	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	if (!message?.length || !name?.length || !rating) {
		return res.status(502).end('Incomplete Body.');
	}

	if (message.length < 25 || rating < 0 || rating > 5 || name.length < 2) {
		return res.status(502).end('Invalid Body.');
	}

	void db
		.db('main')
		.collection<Testimonial>('testimonials')
		.insertOne({ message, name, rating: Number(rating) });

	return res.end('Saved.');
});

export default router;
