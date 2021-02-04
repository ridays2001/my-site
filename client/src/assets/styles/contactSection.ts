import styled from 'styled-components';
import { colors, highlights, shadows, text } from '../theme/constants';

interface Props {
	dark: 0 | 1;
}

const ContactSection = styled.section<Props>`
	margin-top: 1.5em;

	#form,
	#social {
		background-color: ${({ dark }) => (dark ? colors.dark1 : colors.white1)};
		padding: 1.25em;
		border-radius: 21px;
		box-shadow: ${({ dark }) => (dark ? 'none' : shadows.layer1)};
	}

	#social {
		margin-bottom: 1.5em;
	}

	label::after {
		content: '*';
		font-size: 1.25rem;
		color: ${({ dark }) => (dark ? colors.darkErr : colors.lightErr)};
	}

	a {
		text-decoration: none;
	}

	li {
		margin: 5px auto;
	}

	li::before {
		content: '▹';
		font-size: 1.5rem;
		margin-left: 0.75rem;
		margin-right: 0.75rem;
		color: ${({ dark }) => (dark ? colors.pink : colors.azure)};
	}

	.alert {
		border-radius: 14px;
	}
`;

export default ContactSection;
