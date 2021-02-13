import styled from 'styled-components';
import { colors, shadows } from '../theme/constants';

interface Props {
	dark: 0 | 1;
}

const NewReview = styled.section<Props>`
	background-color: ${({ dark }) => (dark ? colors.dark1 : colors.white1)};
	padding: 1.25em;
	border-radius: 21px;
	box-shadow: ${({ dark }) => (dark ? 'none' : shadows.layer1)};

	label::after {
		content: '*';
		font-size: 1.25rem;
		color: ${({ dark }) => (dark ? colors.darkErr : colors.lightErr)};
	}

	.star {
		transform: scale(125%);
		cursor: pointer;
		margin-left: 1rem;
		margin-right: 1rem;
	}

	.star:hover {
		transform: scale(175%);
	}

	article {
		text-align: start;
		margin-top: 1.5em;
	}

	span.marker {
		display: flex;
		justify-content: end;
		font-size: 1.5rem;
		color: ${({ dark }) => (dark ? colors.pink : colors.azure)};
	}
`;

export default NewReview;
