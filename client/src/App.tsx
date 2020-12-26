import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './util/routes';

const App = () => {
	return (
		<div className='App'>
			<Switch>
				{routes.map((route) => (
					<Route {...route} />
				))}
			</Switch>
		</div>
	);
};

export default App;
