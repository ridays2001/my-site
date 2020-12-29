import React from 'react';
import Languages, { css, electron, eslint, html, java, js, node, react, ts } from './languageLogos';

type Project = {
	description: string;
	future: string;
	github: string;
	languages: JSX.Element;
	front: string;
	back: string;
	month: string;
	name: string;
	status: string;
	important: boolean;
};

const gh = 'https://github.com/ridays2001';

const projects: Array<Project> = [
	{
		description: 'My personal website that you currently tread on.',
		github: `${gh}/my-site`,
		languages: <Languages list={[ts, react, css]} />,
		month: 'December 2020',
		name: 'My Personal Website',
		status: 'Ongoing',
		future: 'Feedback section, Blog, other pages.',
		important: false,
		front: 'Typescript (React TSX) and CSS (Bootstrap).',
		back: 'Typescript (Express) and Mongo DB.'
	},
	{
		description: 'A simple screen recording app for desktop. Made with the Nodejs framework Electron.',
		github: `${gh}/tulip-screen-recorder`,
		languages: <Languages list={[electron, js, html, css]} />,
		month: 'December 2020',
		name: 'Tulip Screen Recorder',
		status: 'Completed basic model.',
		future: 'Planned to make an optimized model.',
		important: false,
		front: 'Javascript (Vanilla), HTML, and CSS (Bootstrap).',
		back: 'Node.js (Electron).'
	},
	{
		description: 'Our college sem 3 mini-project, based on the topic Medicare (Or, E - Healthcare).',
		github: `${gh}/medicare-client`,
		languages: <Languages list={[ts, react, css, java]} />,
		month: 'November 2020',
		name: 'Medicare',
		status: 'Completed.',
		future: 'Google Maps API integration, Payments API integration, Tie-Ups with medical practitioners.',
		important: false,
		front: 'Typescript (React TSX) and CSS (Bootstrap).',
		back: 'Typescript (Express), Java (Spring Boot), Maven, and MySQL DB.'
	},
	{
		description: 'A basic demonstration to send HTML based emails using Node.js and Gmail API.',
		github: `${gh}/email-api`,
		languages: <Languages list={[ts]} />,
		month: 'October 2020',
		name: 'Email API',
		status: 'Completed.',
		future: 'None, this is a stand-alone project.',
		important: false,
		front: 'None, this is an API.',
		back: 'Typescript (Express).'
	},
	{
		description: 'A simple quiz web app built with React TSX and Open Trivia DB API to learn React.',
		github: `${gh}/tsx-quiz`,
		languages: <Languages list={[ts, react, css]} />,
		month: 'September 2020',
		name: 'TSX Quiz',
		status: 'Completed.',
		future: 'Question categories, backend for advanced security, group quiz.',
		important: false,
		front: 'Typescript (React TSX) and CSS (Bootstrap).',
		back: 'None, this is client side project.'
	},
	{
		// prettier-ignore
		description: 'A designer greeting cards generator for Teachers\' day for my teachers.',
		github: `${gh}/td-greet`,
		languages: <Languages list={[node, js, css]} />,
		month: 'September 2020',
		name: 'TD Greet',
		status: 'Completed.',
		future: 'None, this is a stand-alone project.',
		important: false,
		front: 'Pug, Javascript (Vanilla), and CSS (Bootstrap).',
		back: 'Node.js (Express)'
	},
	{
		description: 'My personalized ESLint configuration for my Javascript and Typescript projects.',
		github: `${gh}/eslint-config-tulip`,
		languages: <Languages list={[eslint, node]} />,
		month: 'August 2020 - Current',
		name: 'ESLint Config Tulip',
		status: 'Completed partially, with support for Node.js and Typescript.',
		future: 'Add support for React JSX, React TSX, Browser js, etc.',
		important: true,
		front: 'None, this is configuration.',
		back: 'Node.js (ESLint)'
	},
	{
		description: 'An interior design website made for our team-based Verzeo internship project.',
		github: `${gh}/interior-design`,
		languages: <Languages list={[node, js, html, css]} />,
		month: 'August 2020',
		name: 'Interior Design',
		status: 'Completed.',
		future: 'Maybe a blog. This is like an interior designer portfolio, not much scope.',
		important: true,
		front: 'Javascript (jQuery + Vanilla), HTML, and CSS (Bootstrap).',
		back: 'Node.js (Express) and MySQL DB.'
	},
	{
		description: 'My discord bot, with music functionality.',
		github: `${gh}/Julis`,
		languages: <Languages list={[js]} />,
		month: 'August - September 2020',
		name: 'Julis',
		status: 'Completed basic model.',
		future: 'A version with more features, written in Typescript.',
		important: true,
		front: 'Markdown (Discord)',
		back: 'Node.js and Firestore DB.'
	},
	{
		// prettier-ignore
		description: 'A student portal site for my sister\'s home tutorials.',
		github: `${gh}/ht-site`,
		languages: <Languages list={[node, js, css]} />,
		month: 'July 2020',
		name: 'HT - Site',
		status: 'Completed.',
		future: 'A revamped dashboard, built-in option to upload images directly to the database.',
		important: true,
		front: 'Pug, Javascript (jQuery), and CSS (Bootstrap).',
		back: 'Node.js (Express) and Firestore DB.'
	}
];

export default projects;
