import styled from 'styled-components';
import { colors, devices, shadows, text } from '../theme/constants';

interface Props {
	dark: 0 | 1;
}

const Section = styled.section<Props>`
	padding: 1.25em;
	background-color: ${({ dark }) => (dark ? colors.dark1 : colors.white1)};
	box-shadow: ${({ dark }) => (dark ? 'none' : shadows.layer1)};
	border-radius: 21px;
	height: 82.5vh;
	width: 98%;
	max-width: 100%;

	${devices.md} {
		height: 90vh;
	}

	#hero-statement {
		cursor: default;
		font-size: 0.75rem;
		margin-top: -1rem;
		color: ${({ dark }) => (dark ? text.darkHigh : text.lightHigh)};
	}

	${devices.xs} {
		#hero-statement {
			margin-top: 0.5rem;
			font-size: 1.15em;
		}
	}

	${devices.sm} {
		#hero-statement {
			font-size: 1.25em;
		}
	}

	${devices.md} {
		#hero-statement {
			font-size: 2em;
			margin-top: 0;
		}
	}
`;

export default Section;
