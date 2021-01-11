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
