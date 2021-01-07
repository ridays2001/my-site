import React, { Fragment, useContext, useEffect } from 'react';
import ThemeContext from '../assets/theme/themeContext';
import Nav from '../components/nav';
const Blog = () => {
	const { dark } = useContext(ThemeContext);

	useEffect(() => {
		// prettier-ignore
		document.title = 'Riday\'s Diary'
	}, []);

	return (
		<Fragment>
			<Nav active='blog' />
			<h2>Blog Home Page</h2>
		</Fragment>
	);
};

export default Blog;
