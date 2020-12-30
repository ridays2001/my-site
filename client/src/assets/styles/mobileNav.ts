import styled from 'styled-components';
import { colors } from '../theme/constants';

type Props = {
	dark: 0 | 1;
};

const MobileNav = styled.nav<Props>`
	height: 100vh;
	position: fixed;
	z-index: 1;
	left: 0;
	top: -100px;
	background-color: ${({ dark }) => (dark ? colors.dark0 : colors.white1)};
	overflow: hidden;
	transition: 0.5s;
`;

export default MobileNav;
