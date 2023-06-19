import React, { Fragment, useContext, useEffect } from 'react';
import pfp from '../assets/images/me.jpg';
import AboutSection from '../assets/styles/aboutSection';
import ThemeContext from '../assets/theme/themeContext';
import Nav from '../components/nav';

const About = () => {
	const { dark } = useContext(ThemeContext);

	useEffect(() => {
		document.title = 'About Me | Riday Shah';
	}, []);

	return (
		<Fragment>
			<Nav active='about' />
			<h2>About Me:</h2>
			<AboutSection
				dark={dark ? 1 : 0}
				className='l1 row col-11 col-md-8 col-xl-5 mx-auto justify-content-evenly'
			>
				<div className='d-flex col-10 col-md-6 align-items-center justify-content-evenly mt-3'>
					<img src={pfp} alt='My PFP' className='img-fluid' id='pfp' />
				</div>
				<div className='row'></div>
				<article className='col-md-10 col-lg-9 mt-5'>
					<p key='intro'>👋🏻 Hi! I am Riday, a freelance developer based in Mumbai, India.</p>

					<p key='about'>I am a versatile Full Stack Developer specializing in Optimization.</p>

					<p key='life'>
						I recently completed my B. Tech from K. J. Somaiya Institute of Technology. Over the past couple
						of years, I have worked as a freelance developer developing a range of solutions like websites,
						APIs, web scrappers, desktop apps, and much more...
					</p>

					<p key='learn'>
						I am a self-taught developer. I learned most of what I know by reading online guides, articles,
						documentations, and by interacting with other members of the community. I consider myself a
						passionate person who is deeply curious to learn more about new technologies.
					</p>

					<p key='tech'>Here are a few technologies I have recently mingled with:</p>
					<ul className='list-unstyled row'>
						{[
							'Typescript',
							'Node.js',
							'React.js',
							'Next.js',
							'Gatsby.js',
							'Javascript',
							'UI / UX',
							'HTML / CSS',
							'Electron.js',
							'React Native',
							'Azure',
							'Heroku',
							'Vercel',
							'Netlify',
							'AWS',
							'GCP'
						].map(e => (
							<li className='col-md-6' key={e}>
								{e}
							</li>
						))}
					</ul>

					<p key='active'>
						Reach out to me via Email - <strong>iam@riday.me</strong> or send me a friend request on Discord
						- <strong>@ridays2001</strong>.
					</p>

					<p key='hobbies'>
						I like to read various books and articles, listen to music, watch movies and TV series,
						occasionally play games, and hang around with others when I am free.
					</p>
				</article>
			</AboutSection>
		</Fragment>
	);
};

export default About;
