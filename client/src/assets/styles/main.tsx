import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from 'styled-components';
import { colors, darkBg, highlights, lightBg } from '../theme/constants';

type Props = {
	dark?: boolean;
};

const Theme = createGlobalStyle`
body {
	background-color: ${({ dark }) => (dark ? colors.dark0 : colors.white1)};
	background-image: ${({ dark }) => (dark ? darkBg : lightBg)};
	font-family: 'Bree Serif', Helvetica;
	letter-spacing: 1px;
	color: ${({ dark }) => (dark ? colors.white2 : colors.dark0)};
}

::selection {
	background-color: ${({ dark }) => (dark ? highlights.pink : highlights.blue)};
	color: ${({ dark }) => (dark ? colors.white2 : colors.white1)};
}

` as GlobalStyleComponent<Props, DefaultTheme>;

export default Theme;
