import styled from 'styled-components';
import { text, highlights } from '../theme/constants';

type Props = {
	dark: 1 | 0;
};

const AppFooter = styled.footer<Props>`
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
