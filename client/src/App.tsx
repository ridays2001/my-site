import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './util/routes';

const App = () => {
	return (
		<div className='App justify-content-center text-center'>
			<Switch>
				{routes.map((route) => (
					<Route {...route} />
				))}
			</Switch>
		</div>
	);
};

export default App;
