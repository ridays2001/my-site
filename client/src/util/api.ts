const base = 'https://api.riday.me';
const auth = 'React-TSX-Site';

export interface Testimonial {
	name: string;
	rating: number;
	message: string;
}

export const getTestimonials = () => {
	return fetch(`${base}/testimonials`, { method: 'GET' }).then((res) => res.json()) as Promise<Array<Testimonial>>;
};

export const submitTestimonial = (name: string, rating: number, message: string) => {
	return fetch(`${base}/testimonials`, {
		method: 'POST',
		body: JSON.stringify({ name, rating, message }),
		headers: {
			'Content-Type': 'application/json',
			Authorization: auth
		}
	});
};

export const submitContact = (name: string, email: string, message: string) => {
	return fetch(`${base}/contact`, {
		method: 'POST',
		body: JSON.stringify({ name, email, message }),
		headers: {
			'Content-Type': 'application/json'
		}
	});
};

export const parseMd = (md: string) => {
	return fetch(`${base}/parse`, {
		method: 'POST',
		body: JSON.stringify({ md }),
		headers: {
			'Content-Type': 'application/json'
		}
	}).then((res) => res.json()) as Promise<{ parsed: string }>;
};

interface Comment {
	name: string;
	comment: string;
	timestamp: number;
}

export interface BlogPost {
	id: string;
	title: string;
	post: 'string';
	likes: 0;
	timestamp: 0;
	comments: Array<Comment>;
}

export const getBlog = (all: boolean) => {
	if (all) return fetch(`${base}/blog/posts`).then((res) => res.json()) as Promise<Array<BlogPost>>;
	return fetch(`${base}/blog`).then((res) => res.json()) as Promise<Array<BlogPost>>;
};

export const getBlogPost = (id: string) => {
	return fetch(`${base}/blog/posts/${id}`).then((res) => res.json()) as Promise<BlogPost>;
};

export const submitComment = (post: string, name: string, email: string, comment: string) => {
	return fetch(`${base}/blog/comments/${post}`, {
		method: 'POST',
		body: JSON.stringify({ name, email, comment }),
		headers: {
			'Content-Type': 'application/json',
			Authorization: auth
		}
	});
};

export const likePost = (post: string) => {
	return fetch(`${base}/blog/like/${post}`, { method: 'POST', headers: { Authorization: auth } });
};
export const unlikePost = (post: string) => {
	return fetch(`${base}/blog/unlike/${post}`, { method: 'POST', headers: { Authorization: auth } });
};

export const subscribe = (name: string, email: string) => {
	return fetch(`${base}/blog/subscribe/${encodeURIComponent(name)}/${encodeURIComponent(email)}`);
};
export const unsubscribe = (email: string) => fetch(`${base}/blog/unsubscribe/${encodeURIComponent(email)}`);

export const verify = () => fetch(`${base}/verify`, { credentials: 'include' });

export const submitPost = (id: string, title: string, post: string) => {
	return fetch(`${base}/blog/posts`, {
		method: 'POST',
		body: JSON.stringify({ id, title, post }),
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json',
			Authorization: auth
		}
	});
};
