import styled from 'styled-components';
import { colors, shadows } from '../theme/constants';

type Props = {
	dark: 0 | 1;
	bg: 0 | 1;
};

const AppHeader = styled.header<Props>`
	background-color: ${({ bg, dark }) => (bg ? (dark ? colors.dark0 : colors.white3) : 'inherit')};
	box-shadow: ${({ bg, dark }) => (bg ? (dark ? 'none' : shadows.layer3) : 'none')};

	#mobileNav {
		height: 100vh;
		position: fixed;
		z-index: 1;
		left: 0;
		top: -100px;
		background-color: ${({ dark }) => (dark ? colors.dark0 : colors.white1)};
		overflow: hidden;
		transition: 0.5s;
	}

	/* Hamburger menu on mobile. */
	.line {
		fill: none;
		stroke: ${({ dark }) => (dark ? colors.white1 : colors.dark0)};
		stroke-width: 6;
		transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
			stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	.line1 {
		stroke-dasharray: 60 207;
		stroke-width: 6;
	}
	.line2 {
		stroke-dasharray: 60 60;
		stroke-width: 6;
	}
	.line3 {
		stroke-dasharray: 60 207;
		stroke-width: 6;
	}
	.open .line1 {
		stroke-dasharray: 90 207;
		stroke-dashoffset: -134;
		stroke-width: 6;
	}
	.open .line2 {
		stroke-dasharray: 1 60;
		stroke-dashoffset: -30;
		stroke-width: 6;
	}
	.open .line3 {
		stroke-dasharray: 90 207;
		stroke-dashoffset: -134;
		stroke-width: 6;
	}

	.slide-in {
		animation: slide-in 0.5s forwards;
	}

	.slide-out {
		animation: slide-out 0.5s forwards;
	}

	@keyframes slide-in {
		100% {
			top: 0;
		}
	}

	@keyframes slide-out {
		100% {
			top: -100%;
		}
	}
`;

export default AppHeader;
