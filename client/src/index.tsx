import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ThemeProvider from './assets/theme/themeProvider';

ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById('root')
);
