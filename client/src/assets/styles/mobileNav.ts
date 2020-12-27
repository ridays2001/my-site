import styled from 'styled-components';
import { colors } from '../theme/constants';

const MobileNav = styled.nav<{ dark?: boolean }>`
	height: 100%;
	position: fixed;
	z-index: 1;
	left: 0;
	top: -100px;
	background-color: ${({ dark }) => (dark ? colors.dark0 : colors.white1)};
	overflow: hidden;
	transition: 0.5s;
`;

export default MobileNav;
