import styled from 'styled-components';
import { text, colors, shadows, devices, highlights } from '../theme/constants';

interface Props {
	dark: 0 | 1;
}

const BlogHome = styled.main<Props>`
	margin-top: 1.5em;

	.nope {
		text-decoration: none;
		color: inherit;
	}

	.box {
		padding: 1.25em;
		background-color: ${({ dark }) => (dark ? colors.dark1 : colors.white1)};
		border-radius: 21px;
		box-shadow: ${({ dark }) => (dark ? 'none' : shadows.layer1)};
	}

	article {
		margin-bottom: 1.5em;
	}

	.card {
		background-color: ${({ dark }) => (dark ? colors.dark2 : colors.white2)};
		box-shadow: ${({ dark }) => (dark ? 'none' : shadows.layer2)};
		margin: 2em 1em;
		border-radius: 14px;
		padding: 1.25em;
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

	input,
	textarea {
		background-color: ${({ dark }) => (dark ? colors.dark2 : colors.white2)};
		color: ${({ dark }) => (dark ? text.darkMedium : text.lightMedium)};
		box-shadow: ${({ dark }) => (dark ? 'none' : shadows.layer2)};
	}

	input:focus,
	textarea:focus {
		background-color: ${({ dark }) => (dark ? colors.dark2 : colors.white2)};
		box-shadow: 0 0 0 0.25rem ${({ dark }) => (dark ? highlights.pink : highlights.blue)};
		border-color: ${({ dark }) => (dark ? colors.pink : colors.azure)};
		color: ${({ dark }) => (dark ? text.darkHigh : text.lightHigh)};
	}
`;

export default BlogHome;
