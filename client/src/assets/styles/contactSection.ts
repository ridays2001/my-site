import styled from 'styled-components';
import { colors } from '../theme/constants';

interface Props {
	dark: 0 | 1;
}

const ContactSection = styled.section<Props>`
	margin-top: 1.5em;

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
`;

export default ContactSection;
