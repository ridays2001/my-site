export interface Testimonial {
	name: string;
	rating: number;
	message: string;
}

export interface BlogComments {
	name: string;
	email: string;
	comment: string;
}

export interface BlogPost {
	id: string;
	title: string;
	likes: number;
	post: string;
	comments: Array<BlogComments>;
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
