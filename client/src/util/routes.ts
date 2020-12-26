import Home from '../routes/home';
import Contact from '../routes/contact';

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
