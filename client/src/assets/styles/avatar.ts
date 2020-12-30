import styled from 'styled-components';
import { breakpoints, colors, shadows } from '../theme/constants';

type Props = {
	dark: 0 | 1;
};

const Avatar = styled.img<Props>`
	border-radius: 50%;
	width: 75%;
	border: solid 7.5px ${({ dark }) => (dark ? colors.pink : colors.azure)};
	box-shadow: ${({ dark }) => (dark ? 'none' : shadows.layer2)};

	animation-name: floating;
	animation-duration: 3.5s;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in-out;

	@media (min-width: ${breakpoints.md}) {
		width: 50%;
	}

	/* Different animation lengths for different devices. */

	@keyframes floating {
		from {
			transform: translate(0, 0px);
		}
		50% {
			transform: translate(0, -20px);
		}
		to {
			transform: translate(0, 0px);
		}
	}

	@media (min-width: ${breakpoints.sm}) {
		@keyframes floating {
			from {
				transform: translate(0, 0px);
			}
			50% {
				transform: translate(0, -25px);
			}
			to {
				transform: translate(0, 0px);
			}
		}
	}

	@media (min-width: ${breakpoints.md}) {
		@keyframes floating {
			from {
				transform: translate(0, 0px);
			}
			50% {
				transform: translate(0, -40px);
			}
			to {
				transform: translate(0, 0px);
			}
		}
	}

	@media (min-width: ${breakpoints.lg}) {
		@keyframes floating {
			from {
				transform: translate(0, 0px);
			}
			50% {
				transform: translate(0, -50px);
			}
			to {
				transform: translate(0, 0px);
			}
		}
	}

	@media (min-width: ${breakpoints.xl}) {
		@keyframes floating {
			from {
				transform: translate(0, 0px);
			}
			50% {
				transform: translate(0, -65px);
			}
			to {
				transform: translate(0, 0px);
			}
		}
	}
`;

export default Avatar;
