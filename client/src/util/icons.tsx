import React from 'react';
import { highlights } from '../assets/theme/constants';

type Props = { dark: boolean };

const getFill = (dark: boolean) => (dark ? highlights.pink : highlights.blue);

export const FrontEnd = ({ dark }: Props) => (
	<abbr title='Front End Technologies'>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			style={{ fill: getFill(dark) }}
		>
			<path d='M7.375 16.781l1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4C2.138 11.409 2 11.696 2 12s.138.591.375.781L7.375 16.781zM16.625 7.219l-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4C21.862 12.591 22 12.304 22 12s-.138-.591-.375-.781L16.625 7.219z'></path>
			<path transform='rotate(102.527 12 12)' d='M2.78 11H21.219V13.001H2.78z'></path>
		</svg>
	</abbr>
);

export const BackEnd = ({ dark }: Props) => (
	<abbr title='Back End Technologies'>
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			style={{ fill: getFill(dark) }}
		>
			<path
				fill='none'
				d='M4 15v4h16.002L20 15H4zM16 18h-2v-2h2V18zM19 18h-2v-2h2V18zM4 5v4h16.002L20 5H4zM16 8h-2V6h2V8zM19 8h-2V6h2V8z'
			></path>
			<path d='M20 3H4C2.897 3 2 3.897 2 5v4c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5C22 3.897 21.103 3 20 3zM4 9V5h16l.002 4H4zM20 13H4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-4C22 13.897 21.103 13 20 13zM4 19v-4h16l.002 4H4z'></path>
			<path d='M17 6H19V8H17zM14 6H16V8H14zM17 16H19V18H17zM14 16H16V18H14z'></path>
		</svg>
	</abbr>
);
