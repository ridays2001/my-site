import styled from 'styled-components';
import { devices, shadows, text } from '../theme/constants';

interface Props {
	dark: 0 | 1;
}

const ReviewSection = styled.section<Props>`
	cursor: default;

	.card {
		margin: 2em 1em;
		transition: all 0.25s ease;
	}

	.card:hover,
	.card:focus {
		transform: translateY(-7.5px);
		box-shadow: ${({ dark }) => (dark ? 'none' : shadows.layer3)};
	}

	.card-subtitle {
		font-size: 0.8rem;
		color: ${({ dark }) => (dark ? text.darkLow : text.lightLow)};
	}

	${devices.md} {
		.card-subtitle {
			font-size: 0.9rem;
		}
	}
`;

export default ReviewSection;
