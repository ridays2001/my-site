import styled from 'styled-components';
import { colors, shadows } from '../theme/constants';

const ProjectSection = styled.section<{ dark?: boolean }>`
	cursor: default;

	.card {
		background-color: ${({ dark }) => (dark ? colors.dark1 : colors.white1)};
		box-shadow: ${({ dark }) => (dark ? 'none' : shadows.layer1)};
		margin: 2em 1em;
		border-radius: 21px;
		padding: 1.25em;
	}

	.card:hover {
		box-shadow: ${({ dark }) => (dark ? 'none' : shadows.layer2)};
	}

	.list-group {
		background-color: ${({ dark }) => (dark ? colors.dark2 : colors.white1)};
	}

	.list-group-item {
		border-bottom: 1px solid ${({ dark }) => (dark ? 'rgba(125, 125, 125, 0.25)' : 'rgba(0, 0, 0, 0.25)')};
	}
	.list-group-item:first-of-type {
		border-top: 1px solid ${({ dark }) => (dark ? 'rgba(125, 125, 125, 0.25)' : 'rgba(0, 0, 0, 0.25)')};
	}
`;

export default ProjectSection;
