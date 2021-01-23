import styled from 'styled-components';
import { colors, devices, shadows, text } from '../theme/constants';

interface Props {
	dark: 1 | 0;
}

const AboutSection = styled.section<Props>`
	margin-bottom: 2.5em;

	strong {
		color: ${({ dark }) => (dark ? text.darkHigh : text.lightHigh)};
		font-weight: normal;
		user-select: all;
	}

	main {
		margin-top: 1.25em;
	}

	h2 {
		color: ${({ dark }) => (dark ? text.darkHigh : text.lightHigh)};
	}

	#pfp {
		border-radius: 50%;
		width: 75%;
		border: solid 7.5px ${({ dark }) => (dark ? colors.pink : colors.azure)};
		box-shadow: ${({ dark }) => (dark ? 'none' : shadows.layer2)};
	}

	${devices.md} {
		#pfp {
			width: 60%;
		}
	}

	${devices.xl} {
		#pfp {
			width: 50%;
		}
	}

	main {
		text-align: start;
		background-color: ${({ dark }) => (dark ? colors.dark1 : colors.white1)};
		padding: 1.25em;
		border-radius: 21px;
		box-shadow: ${({ dark }) => (dark ? 'none' : shadows.layer1)};
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

	p:first-of-type {
		font-size: 1.5rem;
		color: ${({ dark }) => (dark ? text.darkHigh : text.lightHigh)};
	}
`;

export default AboutSection;
