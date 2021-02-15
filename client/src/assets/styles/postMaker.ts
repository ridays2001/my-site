import styled from 'styled-components';

interface Props {
	dark: 0 | 1;
}

const PostMaker = styled.main<Props>`
	aside {
		margin-top: 2em;
	}

	textarea {
		height: 300px;
	}

	.alert {
		margin-top: 1.25em;
		margin-bottom: 1.25em;
		border-radius: 14px;
	}

	.alert-success h4 {
		color: #0f5132;
	}

	.alert-danger h4 {
		color: #842029;
	}

	.alert-danger strong {
		color: #842029;
		text-decoration: underline;
	}
`;

export default PostMaker;
