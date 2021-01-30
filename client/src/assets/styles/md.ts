import styled from 'styled-components';
import { colors, shadows, text } from '../theme/constants';

interface Props {
	dark: 0 | 1;
}

const MD = styled.aside<Props>`
	padding: 0 1.25em;

	.content {
		border-radius: 0px;
		border-bottom-left-radius: 14px;
		border-bottom-right-radius: 14px;
		width: 100%;
		background-color: ${({ dark }) => (dark ? colors.dark2 : colors.white2)};
		color: ${({ dark }) => (dark ? text.darkMedium : text.lightMedium)};
		box-shadow: ${({ dark }) => (dark ? 'none' : shadows.layer2)};
		border: 0.5px solid ${({ dark }) => (dark ? text.darkMedium : text.lightMedium)};
		border-top: none;
	}

	.content:focus {
		background-color: ${({ dark }) => (dark ? colors.dark2 : colors.white2)};
		box-shadow: none;
		border: 0.5px solid ${({ dark }) => (dark ? text.darkMedium : text.lightMedium)};
		border-top: none;
		color: ${({ dark }) => (dark ? text.darkHigh : text.lightHigh)};
	}

	div.content {
		padding: 1.25em;
		font-size: 1rem;
	}

	.tabs {
		border-top-left-radius: 14px;
		border-top-right-radius: 14px;
		margin: 0 auto;
		background-color: ${({ dark }) => (dark ? colors.dark2 : colors.white2)};
		border: 0.5px solid ${({ dark }) => (dark ? text.darkMedium : text.lightMedium)};
		border-bottom: none;
	}

	.tab {
		border-top-left-radius: 14px;
		border-top-right-radius: 14px;
		width: 50%;
		border-bottom: 0.5px solid ${({ dark }) => (dark ? text.darkMedium : text.lightMedium)};
	}

	.tab.active {
		background-color: ${({ dark }) => (dark ? colors.dark3 : colors.white3)};
		color: ${({ dark }) => (dark ? colors.pink : colors.azure)};
		border-bottom: none;
	}

	#edit.active {
		border-right: 0.5px solid ${({ dark }) => (dark ? text.darkMedium : text.lightMedium)};
		border-bottom-right-radius: 0px;
	}

	#preview.active {
		border-left: 0.5px solid ${({ dark }) => (dark ? text.darkMedium : text.lightMedium)};
		border-bottom-left-radius: 0px;
	}

	.active svg {
		fill: ${({ dark }) => (dark ? colors.pink : colors.azure)};
	}

	svg {
		fill: ${({ dark }) => (dark ? text.darkHigh : text.lightHigh)};
	}

	button {
		color: ${({ dark }) => (dark ? text.darkHigh : text.lightHigh)};
	}
`;

export default MD;
