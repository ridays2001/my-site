import React, { useContext, Fragment } from 'react';
import Nav from '../components/nav';
import HeroSection from '../assets/styles/heroSection';
import Avatar from '../assets/styles/avatar';
import HeroStatement from '../assets/styles/heroStatement';
import ThemeContext from '../assets/theme/themeContext';
import pfp from '../assets/images/me.jpg';
import ProjectSection from '../assets/styles/projectSection';
import projects from '../util/projects';

const Home = () => {
	const { dark } = useContext(ThemeContext);
	return (
		<Fragment>
			<Nav active='home' />
			<HeroSection dark={dark} className='row d-flex align-items-md-center justify-content-center mx-auto mt-2'>
				<div className='col-md-4 p-5 text-center'>
					<Avatar src={pfp} alt='My Profile Picture.' dark={dark} />
				</div>
				<HeroStatement className='col-md-6' dark={dark}>
					Hi, I am Riday. I am a Web Developer. My favorite tool of choice is Typescript. I strive to make
					effective use of my expertise to develop significant things.
				</HeroStatement>
			</HeroSection>
			<h2 style={{ marginTop: '10vh' }}>Projects that I worked on</h2>
			<ProjectSection className='row row-cols-1 row-cols-md-3 row-cols-lg-4 align-items-center' dark={dark}>
				{projects.map((project) => (
					<div className='col'>
						<div className='card'>
							<div className='card-body'>
								<div className='card-title'>{project.name}</div>
								<div className='card-text'>{project.description}</div>
							</div>
							<ul className='list-group list-group-flush text-start'>
								<li className='list-group-item'>Made With: {project.languages}</li>
								<li className='list-group-item'>Status: {project.status}</li>
								<li className='list-group-item'>Future Scope: {project.future}</li>
								<li className='list-group-item'>Front End: {project.front}</li>
								<li className='list-group-item'>Back End: {project.back}</li>
								<li className='list-group-item text-center'>
									<a href={project.github}>GitHub ↗</a>
								</li>
							</ul>
						</div>
					</div>
				))}
			</ProjectSection>
		</Fragment>
	);
};

export default Home;
