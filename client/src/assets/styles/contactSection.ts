import styled from 'styled-components';
import { colors, highlights, shadows, text } from '../theme/constants';

type Props = {
	dark: 0 | 1;
};

const ContactSection = styled.section<Props>`
	h2 {
		color: ${({ dark }) => (dark ? text.darkHigh : text.lightHigh)};
	}

	#form,
	#social {
		background-color: ${({ dark }) => (dark ? colors.dark1 : colors.white1)};
		padding: 1.25em;
		border-radius: 21px;
		box-shadow: ${({ dark }) => (dark ? 'none' : shadows.layer1)};
		margin-bottom: 2em;
	}

	label::after {
		content: '*';
		font-size: 1.25rem;
		color: ${({ dark }) => (dark ? colors.darkErr : colors.lightErr)};
	}

	input,
	textarea {
		background-color: ${({ dark }) => (dark ? colors.dark2 : colors.white2)};
		color: ${({ dark }) => (dark ? text.darkMedium : text.lightMedium)};
		box-shadow: ${({ dark }) => (dark ? 'none' : shadows.layer2)};
	}

	input:focus,
	textarea:focus {
		background-color: ${({ dark }) => (dark ? colors.dark2 : colors.white2)};
		box-shadow: 0 0 0 0.25rem ${({ dark }) => (dark ? highlights.pink : highlights.blue)};
		border-color: ${({ dark }) => (dark ? colors.pink : colors.azure)};
		color: ${({ dark }) => (dark ? text.darkHigh : text.lightHigh)};
	}

	a {
		text-decoration: none;
	}

	li {
		margin: 5px auto;
	}

	li::before {
		content: '▹';
		margin-left: 0.75rem;
		margin-right: 0.75rem;
		color: ${({ dark }) => (dark ? colors.pink : colors.azure)};
	}
`;

export default ContactSection;
