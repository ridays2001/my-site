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
`;

export default PostMaker;
