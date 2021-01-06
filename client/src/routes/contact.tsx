import React, { Fragment, useContext } from 'react';
import ThemeContext from '../assets/theme/themeContext';
import Nav from '../components/nav';
const Contact = () => {
	const { dark } = useContext(ThemeContext);
	return (
		<Fragment>
			<Nav active='contact' />
			<h2>Contact Me Page</h2>
		</Fragment>
	);
};

export default Contact;
