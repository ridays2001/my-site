import About from '../routes/about';
import Blog from '../routes/blog';
import Contact from '../routes/contact';
import Home from '../routes/home';
import Projects from '../routes/projects';

interface RouteType {
	exact?: boolean;
	path?: string;
	component: () => JSX.Element;
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
		component: Projects,
		key: 'projects',
		path: '/projects'
	}
];

export default routes;
