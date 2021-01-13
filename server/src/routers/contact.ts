import * as sentry from '@sentry/node';
import rateLimit from 'express-rate-limit';
import fetch from 'node-fetch';
import db from '../util/db';
import type { ContactForm } from '../util/schemas';
import sendMail from '../util/sendMail';
import contactConfirmation from '../util/templates/contactConfirmation';
import contactMessage from '../util/templates/contactMessage';

import express from 'express';
const router = express.Router();

// 3 max contact forms over a duration of 15 mins.
const limiter = rateLimit({
	max: 3,
	windowMs: 15 * 60 * 1000,
	message: 'Too many contact forms sent. Please wait for about an hour or so before sending another contact form.',
	headers: true
});

router.post('/', limiter, async (req, res) => {
	const collection = db.db('main').collection<ContactForm>('contact');
	const count = await collection.countDocuments();

	const { message, name } = req.body as ContactForm;
	const email = (req.body as ContactForm).email.trim();

	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	if (!email?.length || !name?.length || !message?.length) {
		return res.status(502).end('Incomplete Body.');
	}

	if (!/.*@.*[.].*/g.test(email) || message.length < 10 || name.length < 2) {
		return res.status(502).end('Invalid Body.');
	}

	void collection.insertOne({ id: count + 1, email, message, name, timestamp: Date.now() });

	// Send contact forms to Discord channel, via a webhook.
	try {
		await fetch(process.env.WEBHOOK as string, {
			method: 'POST',
			body: JSON.stringify({
				tts: false,
				embeds: [
					{
						author: {
							name: `From ${name}`
						},
						color: 0xff69b4,
						description: `__**Message:**__\n${message}\n\n__**Email:**__ ${email}`,
						footer: {
							text: `#${count + 1}`
						},
						timestamp: new Date()
					}
				]
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
	} catch (err) {
		sentry.captureException(err);
		return res.status(503).end('Internal server error.');
	}

	try {
		sendMail({
			html: contactMessage(name, message, email),
			subject: `New Contact Form by ${name}`,
			text: `Sent by ${name}.\n${message}\n\nEmail - ${email}`,
			to: process.env.MyEmail as string
		});

		sendMail({
			html: contactConfirmation(name, message),
			subject: 'Contact Form Received Successfully',
			text:
				`Hello ${name}, your contact form has been received successfully.` +
				' You can now sit back and relax while I read and reply to it. ' +
				`For reference, here is what I received:\n${message}`,
			to: email
		});
	} catch (err) {
		sentry.captureException(err);
		return res.status(503).end('Internal server error.');
	}

	return res.end('Received.');
});

export default router;
