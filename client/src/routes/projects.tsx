import React, { Fragment, useContext } from 'react';
import { text } from '../assets/theme/constants';
import ThemeContext from '../assets/theme/themeContext';
import ListProjects from '../components/listProjects';
import Nav from '../components/nav';

const Projects = () => {
	const { dark } = useContext(ThemeContext);
	return (
		<Fragment>
			<Nav active='projects' />
			<h2 style={{ color: dark ? text.darkHigh : text.lightHigh, marginTop: '5vh' }}>My Notable Projects:</h2>
			<ListProjects feat={false} dark={dark} className='align-items-center' />
		</Fragment>
	);
};

export default Projects;
