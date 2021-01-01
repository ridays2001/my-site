import React, { Fragment, useContext } from 'react';
import pfp from '../assets/images/me.jpg';
import Avatar from '../assets/styles/avatar';
import HeroSection from '../assets/styles/heroSection';
import HeroStatement from '../assets/styles/heroStatement';
import ProjectSection from '../assets/styles/projectSection';
import ThemeContext from '../assets/theme/themeContext';
import Nav from '../components/nav';
import { BackEnd, FrontEnd } from '../util/icons';
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

			<ProjectSection className='align-items-center' dark={dark ? 1 : 0}>
				<h2 style={{ marginTop: '10vh' }}>Projects that I worked on</h2>
				<div className='row row-cols-1 row-cols-md-3 row-cols-lg-4 align-items-start'>
					{projects.map(({ back, description, front, github, tech, timeline, name, status }) => (
						<div className='col' key={name}>
							<div className='card'>
								<div className='card-body'>
									<div className='card-title text-start'>{name}</div>
									<div className='card-subtitle mb-3 text-end'>{timeline}</div>
									<div className='card-text'>{description}</div>
								</div>
								<ul className='list-group list-group-flush text-start'>
									<li className='list-group-item' key='made-with'>
										Made With: {tech}
									</li>
									<li className='list-group-item' key='status'>
										{status}
									</li>
									<li className='list-group-item' key='front'>
										<FrontEnd dark={dark} /> Front End:
										<br />
										{front}
									</li>
									<li className='list-group-item' key='back'>
										<BackEnd dark={dark} /> Back End:
										<br />
										{back}
									</li>
									<li className='list-group-item text-center links' key='gh'>
										<a href={github}>GitHub ↗</a>
									</li>
								</ul>
							</div>
						</div>
					))}
				</div>
			</ProjectSection>
		</Fragment>
	);
};

export default Home;
