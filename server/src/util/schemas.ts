export interface Testimonial {
	name: string;
	rating: number;
	message: string;
}

export interface PublicComment {
	name: string;
	comment: string;
	timestamp: number;
}

export interface BlogComment extends PublicComment {
	email: string;
}

interface Post {
	id: string;
	title: string;
	likes: number;
	post: string;
	timestamp: number;
}

export interface PublicPost extends Post {
	comments: Array<PublicComment>;
}

export interface BlogPost extends Post {
	comments: Array<BlogComment>;
}

export interface ContactForm {
	id: number;
	name: string;
	email: string;
	message: string;
	timestamp: number;
}

export interface Subscriber {
	name: string;
	email: string;
}

export const collections = {
	blog: 'blog',
	testimonials: 'testimonials',
	contact: 'contact',
	subs: 'subscribers'
};
