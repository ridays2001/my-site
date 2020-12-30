import React, { Fragment, useContext } from 'react';
import pfp from '../assets/images/me.jpg';
import Avatar from '../assets/styles/avatar';
import HeroSection from '../assets/styles/heroSection';
import HeroStatement from '../assets/styles/heroStatement';
import ProjectSection from '../assets/styles/projectSection';
import ThemeContext from '../assets/theme/themeContext';
import Nav from '../components/nav';
import projects from '../util/projects';

const Home = () => {
	const { dark } = useContext(ThemeContext);

	return (
		<Fragment>
			<Nav active='home' />
			<HeroSection
				dark={dark ? 1 : 0}
				className='row d-flex align-items-md-center justify-content-center mx-auto mt-2'
			>
				<div className='col-md-4 p-5 text-center'>
					<Avatar src={pfp} alt='My Profile Picture.' dark={dark ? 1 : 0} />
				</div>
				<HeroStatement className='col-md-6' dark={dark ? 1 : 0}>
					Hi, I am Riday. I am a Web Developer. My favorite tool of choice is Typescript. I strive to make
					effective use of my expertise to develop significant things.
				</HeroStatement>
			</HeroSection>

			<h2 style={{ marginTop: '10vh' }}>Projects that I worked on</h2>
			<ProjectSection
				className='row row-cols-1 row-cols-md-3 row-cols-lg-4 align-items-center'
				dark={dark ? 1 : 0}
			>
				{projects.map(({ back, description, front, future, github, languages, month, name, status }) => (
					<div className='col' key={name}>
						<div className='card'>
							<div className='card-body'>
								<div className='card-title'>{name}</div>
								<div className='card-text'>{description}</div>
							</div>
							<ul className='list-group list-group-flush text-start'>
								<li className='list-group-item' key='made-with'>
									Made With: {languages}
								</li>
								<li className='list-group-item' key='timeline'>
									Timeline: {month}
								</li>
								<li className='list-group-item' key='status'>
									Status: {status}
								</li>
								<li className='list-group-item' key='future'>
									Future Scope: {future}
								</li>
								<li className='list-group-item' key='front'>
									Front End: {front}
								</li>
								<li className='list-group-item' key='back'>
									Back End: {back}
								</li>
								<li className='list-group-item text-center' key='gh'>
									<a href={github}>GitHub ↗</a>
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
