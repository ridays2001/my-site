import styled from 'styled-components';
import { colors, shadows } from '../theme/constants';

type Props = {
	dark: 0 | 1;
	bg: 0 | 1;
};

const AppHeader = styled.header<Props>`
	background-color: ${({ bg, dark }) => (bg ? (dark ? colors.dark0 : colors.white1) : 'inherit')};
	box-shadow: ${({ bg, dark }) => (bg ? (dark ? 'none' : shadows.layer3) : 'none')};
`;

export default AppHeader;
