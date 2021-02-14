import styled from 'styled-components';
import { colors, devices, shadows, text } from '../theme/constants';

interface Props {
	dark: 0 | 1;
}

const ProjectSection = styled.section<Props>`
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

	.card-title {
		font-size: 1.2em;
	}

	${devices.md} {
		.card-title {
			font-size: 1.5em;
		}
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

	.list-group {
		background-color: ${({ dark }) => (dark ? colors.dark2 : colors.white1)};
	}

	.list-group-item {
		border: none;
	}
	.list-group-item:first-of-type {
		margin-top: 12px;
	}
	.list-group-item:nth-last-of-type(2) {
		margin-bottom: 12px;
	}

	.card-body {
		border-bottom: 1px solid ${({ dark }) => (dark ? 'rgba(125, 125, 125, 0.25)' : 'rgba(0, 0, 0, 0.25)')};
	}

	.links {
		border-top: 1px solid ${({ dark }) => (dark ? 'rgba(125, 125, 125, 0.25)' : 'rgba(0, 0, 0, 0.25)')};
	}
`;

export default ProjectSection;
