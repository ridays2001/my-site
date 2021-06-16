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

					<p key='about'>
						I develop a range of things that live on the internet. I aim to develop things that matter to
						someone. Things that bring smiles.
					</p>

					<p key='life'>
						I am an IT student at K. J. Somaiya Institute of Engineering and Information Technology. On the
						side, I work as a freelance web developer developing various things like discord bots and
						websites.
					</p>

					<p key='learn'>
						I am a self-taught developer. I learned most of what I know by reading online guides, articles,
						documentations, and by interacting with other members of my broad community. I consider myself
						as a passionate person who is curious to learn about new technologies.
					</p>

					<p key='projects'>
						I love making open source projects while learning new things. Making projects is a great way to
						learn a new programming concepts. I am currently learning React, Typescript, and Electron.js.
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
							'Azure',
							'Heroku',
							'Vercel',
							'Netlify',
							'AWS'
						].map(e => (
							<li className='col-md-6' key={e}>
								{e}
							</li>
						))}
					</ul>

					<p key='active'>
						I am active on Discord as <strong>Riday 💙#7468</strong>. You can find me hanging out in various
						channels of The Programmer's Hangout{' '}
						<a
							href='https://discord.gg/programming'
							target='_blank'
							rel='noreferrer'
							aria-label='The invite link for TPH.'
						>
							(Invite)
						</a>{' '}
						discord server.
					</p>

					<p key='hobbies'>
						I like to read various books and articles, listen to music, watch anime and other TV series,
						occasionally play games, and hang around with others when I am free.
					</p>
				</article>
			</AboutSection>
		</Fragment>
	);
};

export default About;
