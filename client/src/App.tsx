import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import ThemeContext from './assets/theme/themeContext';
import Footer from './components/footer';
import routes from './util/routes';

const App = () => {
	const { dark } = useContext(ThemeContext);
	return (
		<div className='App justify-content-center text-center'>
			<Switch>
				{routes.map((route) => (
					<Route {...route} />
				))}
			</Switch>
			<Footer dark={dark} />
		</div>
	);
};

export default App;
