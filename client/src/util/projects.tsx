import React from 'react';
import Languages, { css, electron, eslint, html, java, js, node, react, ts } from './languageLogos';

type Project = {
	description: string;
	github: string;
	tech: JSX.Element;
	front: string;
	back: string;
	timeline: string;
	name: string;
	status: string;
	important: boolean;
};

const gh = 'https://github.com/ridays2001';

const projects: Array<Project> = [
	{
		description: 'My personal website that you currently tread on.',
		github: `${gh}/my-site`,
		tech: <Languages list={[ts, react, css]} />,
		timeline: 'December 2020',
		name: 'My Personal Website',
		status: 'Ongoing',
		important: false,
		front: 'Typescript (React TSX) and CSS (Bootstrap).',
		back: 'Typescript (Express) and Mongo DB.'
	},
	{
		description: 'A simple screen recording app for desktop. Made with the Nodejs framework Electron.',
		github: `${gh}/tulip-screen-recorder`,
		tech: <Languages list={[electron, js, html, css]} />,
		timeline: 'December 2020',
		name: 'Tulip Screen Recorder',
		status: 'This is a basic model. A more optimized model is planned.',
		important: false,
		front: 'Javascript (Vanilla), HTML, and CSS (Bootstrap).',
		back: 'Node.js (Electron).'
	},
	{
		description: 'Our college sem 3 mini-project, based on the topic Medicare (Or, E - Healthcare).',
		github: `${gh}/medicare-client`,
		tech: <Languages list={[ts, react, css, java]} />,
		timeline: 'November 2020',
		name: 'Medicare',
		status:
			'This is a basic model. Maps, payments, and tie-ups with local services' +
			' can be integrated for a full-fledged platform.',
		important: false,
		front: 'Typescript (React TSX) and CSS (Bootstrap).',
		back: 'Typescript (Express), Java (Spring Boot), Maven, and MySQL DB.'
	},
	{
		description: 'A basic demonstration to send HTML based emails using Node.js and Gmail API.',
		github: `${gh}/email-api`,
		tech: <Languages list={[ts]} />,
		timeline: 'October 2020',
		name: 'Email API',
		status: 'This simple demonstration is complete.',
		important: false,
		front: 'None, this is an API.',
		back: 'Typescript (Express).'
	},
	{
		description: 'A simple quiz web app built with React TSX and Open Trivia DB API to learn React.',
		github: `${gh}/tsx-quiz`,
		tech: <Languages list={[ts, react, css]} />,
		timeline: 'September 2020',
		name: 'TSX Quiz',
		status:
			'Completed basic model. Question categories, backend-based verification, group quiz mode' +
			' can be added for an advanced version.',
		important: false,
		front: 'Typescript (React TSX) and CSS (Bootstrap).',
		back: 'None, this is client side project.'
	},
	{
		// prettier-ignore
		description: 'A designer greeting cards generator for Teachers\' day for my teachers.',
		github: `${gh}/td-greet`,
		tech: <Languages list={[node, js, css]} />,
		timeline: 'September 2020',
		name: 'TD Greet',
		status: 'This one-off project is complete.',
		important: false,
		front: 'Pug, Javascript (Vanilla), and CSS (Bootstrap).',
		back: 'Node.js (Express)'
	},
	{
		description: 'My personalized ESLint configuration for my Javascript and Typescript projects.',
		github: `${gh}/eslint-config-tulip`,
		tech: <Languages list={[eslint, node]} />,
		timeline: 'August 2020, December 2020',
		name: 'ESLint Config Tulip',
		status:
			'Completed partially, with support for Node.js and Typescript. ' +
			'Further support for React JSX, TSX, browser js can be added.',
		important: true,
		front: 'None, this is configuration.',
		back: 'Node.js (ESLint)'
	},
	{
		description: 'An interior design website made for our team-based Verzeo internship project.',
		github: `${gh}/interior-design`,
		tech: <Languages list={[node, js, html, css]} />,
		timeline: 'August 2020',
		name: 'Interior Design',
		status: 'This basic interior designing portfolio is complete.',
		important: true,
		front: 'Javascript (jQuery + Vanilla), HTML, and CSS (Bootstrap).',
		back: 'Node.js (Express) and MySQL DB.'
	},
	{
		description: 'My discord bot, with music functionality. Made with Love ♥.',
		github: `${gh}/Julis`,
		tech: <Languages list={[js]} />,
		timeline: 'August - September 2020',
		name: 'Julis',
		status: 'Completed basic model. An advanced version with more features is planned.',
		important: true,
		front: 'Markdown (Discord)',
		back: 'Node.js and Firestore DB.'
	},
	{
		// prettier-ignore
		description: 'A student portal site for my sister\'s home tutorials.',
		github: `${gh}/ht-site`,
		tech: <Languages list={[node, js, css]} />,
		timeline: 'July 2020',
		name: 'HT - Site',
		status: 'Completed basic site. A revamped dashboard, image processing could be added for an advanced version.',
		important: true,
		front: 'Pug, Javascript (jQuery), and CSS (Bootstrap).',
		back: 'Node.js (Express) and Firestore DB.'
	}
];

export default projects;
