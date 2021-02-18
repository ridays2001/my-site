import type { LazyExoticComponent } from 'react';
import { lazy } from 'react';

// Lazy loaded components to improve performance.
const About = lazy(() => import('../routes/about'));
const Blog = lazy(() => import('../routes/blog'));
const BlogPost = lazy(() => import('../routes/blogPost'));
const NewPost = lazy(() => import('../routes/newPost'));
const BlogUnsubscribe = lazy(() => import('../routes/blogUnsubscribe'));
const Contact = lazy(() => import('../routes/contact'));
const Home = lazy(() => import('../routes/home'));
const NewTestimonial = lazy(() => import('../routes/newTestimonial'));
const Projects = lazy(() => import('../routes/projects'));
const Error = lazy(() => import('../routes/error'));

interface RouteType {
	exact?: boolean;
	path?: string;
	component: LazyExoticComponent<() => JSX.Element>;
	key: string;
}

const routes: Array<RouteType> = [
	{
		component: Home,
		exact: true,
		key: 'home',
		path: '/'
	},
	{
		component: Contact,
		key: 'contact',
		path: '/contact'
	},
	{
		component: About,
		key: 'about',
		path: '/about'
	},
	{
		component: Blog,
		key: 'blog',
		path: '/blog',
		exact: true
	},
	{
		component: BlogPost,
		key: 'blogPost',
		path: '/blog/posts/:id'
	},
	{
		component: NewPost,
		key: 'new-post',
		path: '/blog/new'
	},
	{
		component: BlogUnsubscribe,
		key: 'blog-unsubscribe',
		path: '/blog/unsubscribe'
	},
	{
		component: Projects,
		key: 'projects',
		path: '/projects'
	},
	{
		component: NewTestimonial,
		key: 'new-testimonial',
		path: '/new-testimonial'
	},
	{
		component: Error,
		key: 'error'
	}
];

export default routes;
