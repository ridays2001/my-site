import styled from 'styled-components';
import { breakpoints, colors, shadows } from '../theme/constants';

const Avatar = styled.img<{ dark?: boolean }>`
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

	@media (max-width: ${breakpoints.xs}) {
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
`;

export default Avatar;
