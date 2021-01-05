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
		important: false,
		front: 'TS (React TSX) and CSS (Bootstrap).',
		back: 'TS (Express) and Mongo DB.'
	},
	{
		description: 'A simple screen recording app for desktop. Made with the Nodejs framework Electron.',
		github: `${gh}/tulip-screen-recorder`,
		tech: <Languages list={[electron, js, html, css]} />,
		timeline: 'December 2020',
		name: 'Tulip Screen Recorder',
		important: false,
		front: 'JS, HTML, and CSS (Bootstrap).',
		back: 'Node (Electron).'
	},
	{
		description: 'My college sem 3 mini-project, based on the topic Medicare (Or, E - Healthcare).',
		github: `${gh}/medicare-client`,
		tech: <Languages list={[ts, react, css, java]} />,
		timeline: 'November 2020',
		name: 'Medicare',
		important: false,
		front: 'TS (React TSX) and CSS (Bootstrap).',
		back: 'TS (Express), Java (Spring Boot), and MySQL DB.'
	},
	{
		description: 'A basic demonstration to send HTML based emails using Node and Gmail API.',
		github: `${gh}/email-api`,
		tech: <Languages list={[ts]} />,
		timeline: 'October 2020',
		name: 'Email API',
		important: false,
		front: 'None, this is an API.',
		back: 'TS (Express).'
	},
	{
		description: 'A simple quiz web app built with React TSX and Open Trivia DB API to learn React.',
		github: `${gh}/tsx-quiz`,
		tech: <Languages list={[ts, react, css]} />,
		timeline: 'September 2020',
		name: 'TSX Quiz',
		important: false,
		front: 'TS (React TSX) and CSS (Bootstrap).',
		back: 'None, this is client side project.'
	},
	{
		// prettier-ignore
		description: 'A designer greeting cards generator for Teachers\' day for my teachers.',
		github: `${gh}/td-greet`,
		tech: <Languages list={[node, js, css]} />,
		timeline: 'September 2020',
		name: 'TD Greet',
		important: false,
		front: 'Pug, JS, and CSS (Bootstrap).',
		back: 'Node (Express)'
	},
	{
		description: 'My personalized ESLint configuration for my Javascript and Typescript projects.',
		github: `${gh}/eslint-config-tulip`,
		tech: <Languages list={[eslint, node]} />,
		timeline: 'August 2020, December 2020',
		name: 'ESLint Config Tulip',
		important: true,
		front: 'None, this is configuration.',
		back: 'Node (ESLint)'
	},
	{
		description: 'An interior design website made for our team-based Verzeo internship project.',
		github: `${gh}/interior-design`,
		tech: <Languages list={[node, js, html, css]} />,
		timeline: 'August 2020',
		name: 'Interior Design',
		important: true,
		front: 'JS (jQuery), HTML, and CSS (Bootstrap).',
		back: 'Node (Express) and MySQL DB.'
	},
	{
		description: 'My discord bot, with music functionality. Made with Love ♥.',
		github: `${gh}/Julis`,
		tech: <Languages list={[node]} />,
		timeline: 'August - September 2020',
		name: 'Julis',
		important: true,
		front: 'Markdown (Discord)',
		back: 'Node and Firestore DB.'
	},
	{
		// prettier-ignore
		description: 'A student portal site for my sister\'s home tutorials.',
		github: `${gh}/ht-site`,
		tech: <Languages list={[node, js, css]} />,
		timeline: 'July 2020',
		name: 'HT - Site',
		important: true,
		front: 'Pug, JS (jQuery), and CSS (Bootstrap).',
		back: 'Node (Express) and Firestore DB.'
	}
];

export default projects;
