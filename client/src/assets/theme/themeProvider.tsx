import type { ReactNode } from 'react';
import React, { useLayoutEffect, useState } from 'react';
import Bootstrap from '../styles/bootstrap';
import MainStyle from '../styles/main';
import { colors } from './constants';
import ThemeContext from './themeContext';

const ThemeProvider = ({ children }: { children: ReactNode | Array<ReactNode> }) => {
	const [dark, setDark] = useState(false);

	const toggle = () => {
		window.localStorage.setItem('theme', dark ? 'light' : 'dark');
		setDark(!dark);
	};

	useLayoutEffect(() => {
		let mounted = true;
		const savedTheme = window.localStorage.getItem('theme') as 'light' | 'dark';
		if (!savedTheme && mounted) {
			const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
			if (darkMode) setDark(true);
		}
		if (savedTheme === 'dark' && mounted) {
			setDark(true);
		}
		if (dark) {
			document.querySelector('meta[name="theme-color"]')?.setAttribute('content', colors.pink);
		} else {
			document.querySelector('meta[name="theme-color"]')?.setAttribute('content', colors.azure);
		}
		return () => {
			mounted = false;
		};
	}, [dark]);

	return (
		<ThemeContext.Provider value={{ dark, toggle }}>
			<Bootstrap />
			<MainStyle dark={dark ? 1 : 0} />
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
