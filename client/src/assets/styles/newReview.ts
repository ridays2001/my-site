import styled from 'styled-components';
import { colors } from '../theme/constants';

interface Props {
	dark: 0 | 1;
}

const NewReview = styled.section<Props>`
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
