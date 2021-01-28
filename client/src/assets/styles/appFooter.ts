import styled from 'styled-components';
import { text } from '../theme/constants';

interface Props {
	dark: 1 | 0;
}

const AppFooter = styled.footer<Props>`
	margin-top: 1.5em;
	margin-bottom: 25px;
	color: ${({ dark }) => (dark ? text.darkHigh : text.lightHigh)};
	font-size: 1.5rem;

	#gh {
		text-decoration: none;
		color: inherit;
	}

	#gh:hover,
	#gh:focus {
		color: ${({ dark }) => (dark ? text.darkMedium : text.lightMedium)};
	}
`;

export default AppFooter;
