import Contact from '../routes/contact';
import Home from '../routes/home';

type RouteType = {
	exact?: boolean;
	path?: string;
	component: () => JSX.Element;
	key: string;
};

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
	}
];

export default routes;
