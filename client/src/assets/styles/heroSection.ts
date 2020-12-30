import styled from 'styled-components';
import { breakpoints, colors, shadows } from '../theme/constants';

type Props = {
	dark: 0 | 1;
};

const Section = styled.section<Props>`
	padding: 2em;
	background-color: ${({ dark }) => (dark ? colors.dark1 : colors.white2)};
	box-shadow: ${({ dark }) => (dark ? 'none' : shadows.layer1)};
	border-radius: 21px;
	height: 82.5vh;
	width: 98%;
	max-width: 100%;

	@media (min-width: ${breakpoints.md}) {
		height: 90vh;
	}
`;

export default Section;
