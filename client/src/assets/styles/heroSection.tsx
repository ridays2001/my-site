import styled from 'styled-components';
import { colors } from '../theme/constants';

const Section = styled.section<{ dark?: boolean }>`
	margin-top: 0.75em;
	padding: 2em;
	height: 90vh;
	background-color: ${({ dark }) => (dark ? colors.dark1 : colors.white2)};
	box-shadow: ${({ dark }) => (dark ? 'none' : '0 0 4px 8px rgba(0, 0, 0, 0.08)')};
	border-radius: 21px;
`;

export default Section;
