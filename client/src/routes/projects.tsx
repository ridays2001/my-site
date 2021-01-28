import React, { Fragment, useContext } from 'react';
import ThemeContext from '../assets/theme/themeContext';
import ListProjects from '../components/listProjects';
import Nav from '../components/nav';

const Projects = () => {
	const { dark } = useContext(ThemeContext);
	return (
		<Fragment>
			<Nav active='projects' />
			<h2>My Notable Projects:</h2>
			<ListProjects feat={false} dark={dark} className='align-items-center' />
		</Fragment>
	);
};

export default Projects;
