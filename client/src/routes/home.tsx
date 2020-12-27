import React, { useContext, Fragment } from 'react';
import Nav from '../components/nav';
import HeroSection from '../assets/styles/heroSection';
import Avatar from '../assets/styles/avatar';
import HeroStatement from '../assets/styles/heroStatement';
import ThemeContext from '../assets/theme/themeContext';
import pfp from '../assets/images/me.jpg';

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
					Hi, I am Riday. I am a self-taught Web Developer. My favorite tools of choice are Nodejs and
					Typescript. I strive to make effective use of my expertise to develop things that matter.
				</HeroStatement>
			</HeroSection>
		</Fragment>
	);
};

export default Home;
