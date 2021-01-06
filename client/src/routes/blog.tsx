import React, { Fragment, useContext } from 'react';
import ThemeContext from '../assets/theme/themeContext';
import Nav from '../components/nav';
const Blog = () => {
	const { dark } = useContext(ThemeContext);
	return (
		<Fragment>
			<Nav active='blog' />
			<h2>Blog Home Page</h2>
		</Fragment>
	);
};

export default Blog;
