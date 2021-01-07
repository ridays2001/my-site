import React, { Fragment, useContext, useEffect } from 'react';
import ThemeContext from '../assets/theme/themeContext';
import Nav from '../components/nav';
const Contact = () => {
	const { dark } = useContext(ThemeContext);

	useEffect(() => {
		document.title = 'Contact Me | Riday Shah';
	}, []);

	return (
		<Fragment>
			<Nav active='contact' />
			<h2>Contact Me Page</h2>
		</Fragment>
	);
};

export default Contact;
