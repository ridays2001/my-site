import React, { useContext } from 'react';
import Nav from '../components/nav';
import HeroSection from '../assets/styles/heroSection';
import ThemeContext from '../assets/theme/themeContext';

const Home = () => {
	const { dark } = useContext(ThemeContext);
	return (
		<div>
			<Nav active='home' />
			<HeroSection dark={dark}>This is the Hero Section on the home page.</HeroSection>
		</div>
	);
};

export default Home;
