import React, { Fragment, useContext } from 'react';
import ThemeContext from '../assets/theme/themeContext';
import Nav from '../components/nav';
import AboutSection from '../assets/styles/aboutSection';

const About = () => {
	const { dark } = useContext(ThemeContext);
	return (
		<Fragment>
			<Nav active='about' />
			<AboutSection dark={dark ? 1 : 0}>
				<h2>About Me Page</h2>
			</AboutSection>
		</Fragment>
	);
};

export default About;
