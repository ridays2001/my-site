import React, { Suspense, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import ThemeContext from './assets/theme/themeContext';
import Footer from './components/footer';
import routes from './util/routes';

const App = () => {
	const { dark } = useContext(ThemeContext);
	return (
		<div className='App justify-content-center text-center'>
			<Suspense fallback={<h1>Page is loading...</h1>}>
				<Switch>
					{routes.map((route) => (
						<Route {...route} />
					))}
				</Switch>
				<Footer dark={dark} />
			</Suspense>
		</div>
	);
};

export default App;
