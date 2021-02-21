import styled from 'styled-components';
import { text } from '../theme/constants';

interface Props {
	dark: 0 | 1;
}

const PostSection = styled.section<Props>`
	.card {
		padding: 0 !important;
		margin-top: 1.5em;
		font-size: 0.85rem;
	}

	.card-title {
		padding: 1.25em 0;
		font-size: 1.2rem;
	}

	#post-ts {
		margin-bottom: 0.5em;
	}

	.time {
		color: ${({ dark }) => (dark ? text.darkLow : text.lightLow)};
	}

	textarea {
		height: 100px;
		width: auto;
	}
`;

export default PostSection;
