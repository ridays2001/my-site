import styled from 'styled-components';
import { colors, devices, highlights, shadows, text } from '../theme/constants';

interface Props {
	dark: 0 | 1;
}

const BlogHome = styled.main<Props>`
	margin-top: 1.5em;

	.nope {
		text-decoration: none;
		color: inherit;
	}

	article {
		margin-bottom: 1.5em;
	}

	.card {
		margin: 2em 1em;
		transition: all 0.3s ease;
	}

	.card-title {
		font-size: 1.2em;
		color: ${({ dark }) => (dark ? text.darkHigh : text.lightHigh)};
		margin-bottom: 1em;
	}

	${devices.md} {
		.card-title {
			font-size: 1.5em;
		}
	}

	.card:hover,
	.card:focus {
		transform: translateY(-7.5px);
		box-shadow: ${({ dark }) => (dark ? 'none' : shadows.layer3)};
	}
`;

export default BlogHome;
