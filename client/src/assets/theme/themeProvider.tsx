import React, { ReactNode, useLayoutEffect, useState } from 'react';
import ThemeContext from './themeContext';
import MainStyle from '../styles/main';
import Bootstrap from '../styles/bootstrap';
import { colors } from './constants';

const ThemeProvider = ({ children }: { children: ReactNode | Array<ReactNode> }) => {
	const [dark, setDark] = useState(false);

	const toggle = () => {
		window.localStorage.setItem('theme', dark ? 'light' : 'dark');
		setDark(!dark);
	};

	useLayoutEffect(() => {
		const savedTheme = window.localStorage.getItem('theme') as 'light' | 'dark';
		if (!savedTheme) {
			const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
			if (darkMode) setDark(true);
		}
		if (savedTheme === 'dark') {
			setDark(true);
		}
		if (dark) {
			document.querySelector('meta[name="theme-color"]')?.setAttribute('content', colors.pink);
		} else {
			document.querySelector('meta[name="theme-color"]')?.setAttribute('content', colors.azure);
		}
		return () => undefined;
	}, [dark]);

	return (
		<ThemeContext.Provider value={{ dark, toggle }}>
			<Bootstrap />
			<MainStyle dark={dark} />
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
