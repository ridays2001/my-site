import styled from 'styled-components';
import { colors, shadows, text } from '../theme/constants';

interface Props {
	dark: 0 | 1;
}

const PostSection = styled.section<Props>`
	margin-top: 1.5em;
	background-color: ${({ dark }) => (dark ? colors.dark1 : colors.white1)};
	box-shadow: ${({ dark }) => (dark ? 'none' : shadows.layer1)};
	border-radius: 21px;

	.card {
		margin-top: 1.5em;
		border-radius: 14px;
		background-color: ${({ dark }) => (dark ? colors.dark2 : colors.white2)};
		box-shadow: ${({ dark }) => (dark ? 'none' : shadows.layer2)};
		font-size: 0.85rem;
	}

	.card-title {
		padding: 1.25em 0;
		font-size: 1.2rem;
	}

	#time {
		color: ${({ dark }) => (dark ? text.darkLow : text.lightLow)};
	}
`;

export default PostSection;
