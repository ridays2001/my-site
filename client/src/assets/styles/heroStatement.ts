import styled from 'styled-components';
import { breakpoints, colors, shadows } from '../theme/constants';

const HeroStatement = styled.div<{ dark?: boolean }>`
	font-size: 1.25em;
	box-shadow: ${({ dark }) => (dark ? 'none' : shadows.layer2)};
	background-color: ${({ dark }) => (dark ? colors.dark2 : 'inherit')};
	padding: 1.25em;
	border-radius: 14px;

	@media (min-width: 768px) {
		font-size: 2em;
	}

	@media (max-width: 768px) {
		margin-top: 0.5rem;
	}

	@media (max-width: ${breakpoints.xs}) {
		margin-top: -1rem;
		font-size: 0.8rem;
	}
`;

export default HeroStatement;
