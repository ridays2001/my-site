import styled from 'styled-components';
import { breakpoints, colors, shadows } from '../theme/constants';

const HeroStatement = styled.div<{ dark?: boolean }>`
	cursor: default;
	box-shadow: ${({ dark }) => (dark ? 'none' : shadows.layer2)};
	background-color: ${({ dark }) => (dark ? colors.dark2 : 'inherit')};
	padding: 1.25em;
	border-radius: 14px;
	font-size: 0.75rem;
	margin-top: -1rem;

	@media (min-width: ${breakpoints.xs}) {
		margin-top: 0.5rem;
		font-size: 1.15em;
	}

	@media (min-width: ${breakpoints.sm}) {
		font-size: 1.25em;
	}

	@media (min-width: ${breakpoints.md}) {
		font-size: 2em;
		margin-top: 0;
	}
`;

export default HeroStatement;
