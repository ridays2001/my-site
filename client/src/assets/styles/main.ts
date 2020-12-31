import { createGlobalStyle } from 'styled-components';
import { colors, darkBg, highlights, lightBg, text } from '../theme/constants';

type Props = {
	dark: 0 | 1;
};

const Theme = createGlobalStyle<Props>`
body {
	background-color: ${({ dark }) => (dark ? colors.dark0 : colors.white1)};
	background-image: ${({ dark }) => (dark ? darkBg : lightBg)};
	font-family: 'Bree Serif', Helvetica;
	letter-spacing: 1px;
	color: ${({ dark }) => (dark ? text.darkMedium : text.lightMedium)};
	transition: all 1s;
}

::selection {
	background-color: ${({ dark }) => (dark ? highlights.pink : highlights.blue)};
	color: ${({ dark }) => (dark ? colors.white2 : colors.white1)};
}

a:not(.nope) {
	color: ${({ dark }) => (dark ? colors.pink : colors.azure)};
	display: inline-block;
	padding: 5px 10px;
	border-radius: 3.5px;
	transition: all 0.3s ease-in-out;
	text-underline-offset: 5px;
	text-decoration-thickness: 0.125em;
}

a:not(.nope):hover {
	color: ${colors.white1};
	text-decoration: none;
	background-color: ${({ dark }) => (dark ? highlights.pink : highlights.blue)};
}
`;

export default Theme;
