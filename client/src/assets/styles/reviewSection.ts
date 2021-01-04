import styled from 'styled-components';
import { devices, colors, shadows, text } from '../theme/constants';

type Props = {
	dark: 0 | 1;
};

const ReviewSection = styled.section<Props>`
	cursor: default;

	.card {
		background-color: ${({ dark }) => (dark ? colors.dark1 : colors.white1)};
		box-shadow: ${({ dark }) => (dark ? 'none' : shadows.layer1)};
		margin: 2em 1em;
		border-radius: 21px;
		padding: 1.25em;
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

	@media (${devices.md}) {
		.card-subtitle {
			font-size: 0.9rem;
		}
	}
`;

export default ReviewSection;
