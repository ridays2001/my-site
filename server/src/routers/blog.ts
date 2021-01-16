import db from '../util/db';
import type { BlogComments, BlogPost, Subscriber } from '../util/schemas';
import { collections } from '../util/schemas';
import rateLimit from 'express-rate-limit';

import express from 'express';
const router = express.Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/', async (_req, res) => {
	const posts: Array<BlogPost> = [];
	await db
		.db('main')
		.collection<BlogPost>(collections.blog)
		.find()
		.limit(5)
		.toArray()
		.then(blogPosts => posts.push(...blogPosts));

	return res.json(posts);
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/posts', async (_req, res) => {
	const posts: Array<BlogPost> = [];
	await db
		.db('main')
		.collection<BlogPost>(collections.blog)
		.find()
		.toArray()
		.then(blogPosts => posts.push(...blogPosts));

	return res.json(posts);
});

// 1 max request over the duration of 24 hours.
const limiter = rateLimit({
	max: 1,
	windowMs: 24 * 60 * 60 * 1000,
	message: 'Please do not abuse this service.',
	headers: true
});

router.post('/posts', limiter, (req, res) => {
	if (req.headers.authorization !== (process.env.AUTH as string)) return res.status(501).send('Denied!');
	if ((req.cookies as { secret: string } | undefined)?.secret !== process.env.SECRET) {
		return res.status(501).send('Denied!');
	}

	const { id, post, title } = req.body as BlogPost | Record<string, undefined>;
	if (!id?.length || !post?.length || !title?.length) {
		return res.status(502).send('Incomplete Body.');
	}

	// Send emails to mailing list.

	void db.db('main').collection<BlogPost>(collections.blog).insertOne({ id, post, title, comments: [], likes: 0 });

	return res.send('Saved.');
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/posts/:id', async (req, res) => {
	const { id } = req.params as { id: string } | Record<string, undefined>;
	if (!id?.length) return res.status(504).send('Post does not exist.');
	const post = await db.db('main').collection<BlogPost>(collections.blog).findOne({ id });
	if (!post?.id) return res.status(504).send('Post does not exist.');
	return res.json(post);
});

router.post('/comments/:post', (req, res) => {
	if (req.headers.authorization !== (process.env.AUTH as string)) return res.status(501).send('Denied!');
	const { comment, email, name } = req.body as BlogComments | Record<string, undefined>;
	const { post } = req.params as { post?: string };

	if (!comment?.length || !email?.length || !name?.length || !post?.length) {
		return res.status(502).send('Incomplete Body.');
	}

	void db
		.db('main')
		.collection<BlogPost>(collections.blog)
		.updateOne({ id: post }, { $push: { comments: { $each: [{ comment, email, name }] } } });

	// Use webhook to notify.

	return res.send('Saved');
});

router.post('/like/:post', (req, res) => {
	if (req.headers.authorization !== (process.env.AUTH as string)) return res.status(501).send('Denied!');
	const { post } = req.params as { post?: string };

	if (!post) return res.status(502).send('Missing post id.');

	void db
		.db('main')
		.collection<BlogPost>(collections.blog)
		.updateOne({ id: post }, { $inc: { likes: 1 } });

	return res.send('Like added.');
});

router.post('/unlike/:post', (req, res) => {
	if (req.headers.authorization !== (process.env.AUTH as string)) return res.status(501).send('Denied!');
	const { post } = req.params as { post?: string };

	if (!post) return res.status(502).send('Missing post id.');

	void db
		.db('main')
		.collection<BlogPost>(collections.blog)
		.updateOne({ id: post }, { $inc: { likes: -1 } });

	return res.send('Like Removed.');
});

router.get('/subscribe', (_req, res) => {
	res.status(502).send('Incomplete Request. Correct format - /subscribe/:name/:email');
});

router.get('/subscribe/:x', (_req, res) => {
	res.status(502).send('Incomplete Request. Correct format - /subscribe/:name/:email');
});

router.get('/subscribe/:name/:email', (req, res) => {
	const { email, name } = req.params as { name?: string; email?: string };
	if (!email?.length || !name?.length) {
		return res.status(502).send('Incomplete Request.');
	}

	if (!/.*@.*[.].*/g.test(email) || name.length < 2) {
		return res.status(502).send('Invalid Request.');
	}

	// Send confirmation email.

	void db.db('main').collection<Subscriber>(collections.subs).insertOne({ name, email });
	return res.send(`Your email (${email}) has been successfully subscribed to receive future updates!`);
});

router.get('/unsubscribe', (_req, res) => {
	res.status(502).send('Incomplete Request. Correct format - /subscribe/:email');
});

router.get('/unsubscribe/:email', (req, res) => {
	const { email } = req.params as { email?: string };

	if (!email?.length) {
		return res.status(502).send('Incomplete Request.');
	}

	if (!/.*@.*[.].*/g.test(email)) {
		return res.status(502).send('Invalid Request.');
	}

	// Send confirmation email.

	void db.db('main').collection<Subscriber>(collections.subs).deleteOne({ email });
	return res.send(`Your email (${email}) will no longer receive future updates!`);
});

export default router;
