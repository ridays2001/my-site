import React, { Fragment, useContext } from 'react';
import pfp from '../assets/images/me.jpg';
import Avatar from '../assets/styles/avatar';
import HeroSection from '../assets/styles/heroSection';
import ThemeContext from '../assets/theme/themeContext';
import Nav from '../components/nav';
import ListProjects from '../components/listProjects';
import Testimonials from '../components/testimonials';

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
				<article className='col-md-6 d-flex align-items-center' id='hero-statement'>
					Hi, I am Riday. I am a self-taught Web Developer. I strive to make effective use of my expertise to
					develop things that matter.
				</article>
			</HeroSection>

			<ListProjects dark={dark} className='align-items-center' feat={true} />

			<Testimonials dark={dark} className='mb-5' />
		</Fragment>
	);
};

export default Home;
