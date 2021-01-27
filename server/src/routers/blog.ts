import { captureException } from '@sentry/node';
import rateLimit from 'express-rate-limit';
import fetch from 'node-fetch';
import parseMd from '../util/parseMd';

// Database and schemas.
import db from '../util/db';
import type { BlogComment, BlogPost, Subscriber, PublicPost } from '../util/schemas';
import { collections } from '../util/schemas';

// Mail and templates.
import sendMail from '../util/sendMail';
import blogSubscribe from '../util/templates/blogSubscribe';
import blogUnsubscribe from '../util/templates/blogUnsubscribe';
import blogUpdate from '../util/templates/blogUpdate';

import express from 'express';
const router = express.Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/', async (_req, res) => {
	const posts: Array<PublicPost> = [];
	await db
		.db('main')
		.collection<BlogPost>(collections.blog)
		.find({}, { sort: { timestamp: 1 }, limit: 5 })
		.toArray()
		.then(blogPosts => {
			blogPosts.forEach(({ comments, id, likes, post, timestamp, title }) => {
				posts.push({
					comments: comments.map(c => ({ name: c.name, comment: c.comment, timestamp: c.timestamp })),
					id,
					likes,
					post,
					timestamp,
					title
				});
			});
		});

	return res.json(posts);
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/posts', async (_req, res) => {
	const posts: Array<PublicPost> = [];
	await db
		.db('main')
		.collection<BlogPost>(collections.blog)
		.find()
		.toArray()
		.then(blogPosts => {
			blogPosts.forEach(({ comments, id, likes, post, timestamp, title }) => {
				posts.push({
					comments: comments.map(c => ({ name: c.name, comment: c.comment, timestamp: c.timestamp })),
					id,
					likes,
					post,
					timestamp,
					title
				});
			});
		});

	return res.json(posts);
});

// 1 max request over the duration of 24 hours.
const limiter = rateLimit({
	max: 1,
	windowMs: 24 * 60 * 60 * 1000,
	message: 'Please do not abuse this service.',
	headers: true
});

router.post('/posts', limiter, async (req, res) => {
	if (req.headers.authorization !== (process.env.AUTH as string)) return res.status(403).send('Denied!');
	if ((req.signedCookies as { secret: string } | undefined)?.secret !== process.env.SECRET) {
		return res.status(403).send('Denied Cookie!');
	}

	const { id, post, title } = req.body as BlogPost | Record<string, undefined>;
	if (!id?.length || !post?.length || !title?.length) {
		return res.status(502).send('Incomplete Body.');
	}

	// Send emails to mailing list.
	let count = await db.db('main').collection<Subscriber>(collections.subs).countDocuments();
	let skip = 0;
	while (count > 0) {
		const bcc: Array<string> = [];
		await db
			.db('main')
			.collection<Subscriber>(collections.subs)
			.find()
			.skip(skip)
			.limit(98)
			.toArray()
			.then(subs => subs.forEach(sub => bcc.push(sub.email)));

		if (count > 98) {
			count -= 98;
			skip += 98;
		} else {
			count = 0;
		}

		const link = `${process.env.CLIENT as string}/blog/posts/${id}`;
		const unsubscribe = `${process.env.CLIENT as string}/blog/unsubscribe`;

		sendMail({
			html: blogUpdate(title, link, unsubscribe),
			subject: `New Post: ${title}`,
			text:
				'Hey there! I just posted another blog article.\n' +
				`Check it out here - ${link}\n\n` +
				`If you wish to opt out of such updates, visit this link - ${unsubscribe}`,
			to: process.env.MyMail as string,
			bcc
		});
	}

	void db
		.db('main')
		.collection<BlogPost>(collections.blog)
		.insertOne({ id, post: parseMd(post), title, comments: [], likes: 0, timestamp: Date.now() });

	return res.send('Saved.');
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/posts/:id', async (req, res) => {
	const { id } = req.params as { id: string } | Record<string, undefined>;
	if (!id?.length) return res.status(504).send('Post does not exist.');
	const post = await db.db('main').collection<BlogPost>(collections.blog).findOne({ id });
	if (!post?.id) return res.status(504).send('Post does not exist.');
	const response: PublicPost = {
		comments: post.comments.map(c => ({ name: c.name, comment: c.comment, timestamp: c.timestamp })),
		id: post.id,
		likes: post.likes,
		post: post.post,
		timestamp: post.timestamp,
		title: post.title
	};
	return res.json(response);
});

router.post('/comments/:post', (req, res) => {
	if (req.headers.authorization !== (process.env.AUTH as string)) return res.status(403).send('Denied!');
	const { comment, email, name } = req.body as BlogComment | Record<string, undefined>;
	const { post } = req.params as { post?: string };

	if (!comment?.length || !email?.length || !name?.length || !post?.length) {
		return res.status(502).send('Incomplete Body.');
	}

	if (!/.*@.*[.].*/g.test(email) || name.length < 2) {
		return res.status(502).send('Invalid Body.');
	}

	void db
		.db('main')
		.collection<BlogPost>(collections.blog)
		.updateOne(
			{ id: post },
			{ $push: { comments: { $each: [{ comment: parseMd(comment), email, name, timestamp: Date.now() }] } } }
		);

	void fetch(process.env.WB_Misc as string, {
		method: 'POST',
		body: JSON.stringify({
			tts: false,
			embeds: [
				{
					color: 0x007af5,
					author: { name },
					description: `__**Post:**__ ${post}\n__**Comment:**__ ${comment}`,
					timestamp: new Date()
				}
			]
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	}).catch(err => captureException(err));

	return res.send('Saved');
});

router.post('/like/:post', (req, res) => {
	if (req.headers.authorization !== (process.env.AUTH as string)) return res.status(403).send('Denied!');
	const { post } = req.params as { post?: string };

	if (!post) return res.status(502).send('Missing post id.');

	void db
		.db('main')
		.collection<BlogPost>(collections.blog)
		.updateOne({ id: post }, { $inc: { likes: 1 } });

	return res.send('Like added.');
});

router.post('/unlike/:post', (req, res) => {
	if (req.headers.authorization !== (process.env.AUTH as string)) return res.status(403).send('Denied!');
	const { post } = req.params as { post?: string };

	if (!post) return res.status(502).send('Missing post id.');

	void db
		.db('main')
		.collection<BlogPost>(collections.blog)
		.updateOne({ id: post }, { $inc: { likes: -1 } });

	return res.send('Like Removed.');
});

// 5 max requests over the duration of 24 hours.
const subLimiter = rateLimit({
	max: 5,
	windowMs: 24 * 60 * 60 * 1000,
	message: 'Please do not abuse this service.',
	headers: true
});

router.get('/subscribe', (_req, res) => {
	res.status(502).send('Incomplete Request. Correct format - /subscribe/:name/:email');
});

router.get('/subscribe/:x', (_req, res) => {
	res.status(502).send('Incomplete Request. Correct format - /subscribe/:name/:email');
});

router.get('/subscribe/:name/:email', subLimiter, (req, res) => {
	const { email, name } = req.params as { name?: string; email?: string };
	if (!email?.length || !name?.length) {
		return res.status(502).send('Incomplete Request.');
	}

	if (!/.*@.*[.].*/g.test(email) || name.length < 2) {
		return res.status(502).send('Invalid Request.');
	}

	const unsubscribe = `${process.env.API as string}/blog/unsubscribe/${encodeURIComponent(email)}`;
	sendMail({
		html: blogSubscribe(name, unsubscribe),
		subject: 'Added to Mailing List',
		text:
			`Hello ${name}, you've been added to my mailing list. ` +
			`If you want to unsubscribe, then visit the below link - ${unsubscribe}.` +
			' If there are any issues, feel free to reply to this message.',
		to: email
	});

	void fetch(process.env.WB_Subs as string, {
		method: 'POST',
		body: JSON.stringify({
			tts: false,
			embeds: [
				{
					color: 0x36ff9a,
					description: `__**Name:**__ ${name}\n__**Email:**__ ${email}`,
					timestamp: new Date()
				}
			]
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	}).catch(err => captureException(err));

	void db.db('main').collection<Subscriber>(collections.subs).insertOne({ name, email });
	return res.send(`Your email (${email}) has been successfully subscribed to receive future updates!`);
});

router.get('/unsubscribe', (_req, res) => {
	res.status(502).send('Incomplete Request. Correct format - /subscribe/:email');
});

router.get('/unsubscribe/:email', subLimiter, async (req, res) => {
	const { email } = req.params as { email?: string };

	if (!email?.length) {
		return res.status(502).send('Incomplete Request.');
	}

	if (!/.*@.*[.].*/g.test(email)) {
		return res.status(502).send('Invalid Request.');
	}

	const sub = await db.db('main').collection<Subscriber>(collections.subs).findOne({ email });
	if (!sub) return res.status(406).send('You never subscribed for the list.');

	const subscribe = `${process.env.API as string}/blog/subscribe/${encodeURIComponent(email)}`;
	sendMail({
		html: blogUnsubscribe(sub.name, subscribe),
		subject: 'Removed from Mailing List',
		text:
			`Hello ${sub.name}, you've been removed from my mailing list. ` +
			`If you want to re-subscribe, then visit the below link - ${subscribe}.` +
			' If there are any issues, feel free to reply to this message.',
		to: email
	});

	void fetch(process.env.WB_Subs as string, {
		method: 'POST',
		body: JSON.stringify({
			tts: false,
			embeds: [
				{
					color: 0xaa0022,
					description: `__**Email:**__ ${email}`,
					timestamp: new Date()
				}
			]
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	}).catch(err => captureException(err));

	void db.db('main').collection<Subscriber>(collections.subs).deleteOne({ email });
	return res.send(`Your email (${email}) will no longer receive future updates!`);
});

export default router;
