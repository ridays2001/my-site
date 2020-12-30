import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints, colors, highlights } from '../theme/constants';

type Props = {
	dark: 0 | 1;
	active: 0 | 1;
};

const NavLink = styled(Link)<Props>`
	color: ${({ active, dark }) => (active ? colors.white1 : dark ? colors.pink : colors.azure)};
	background-color: ${({ active, dark }) => (active ? (dark ? highlights.pink : highlights.blue) : 'none')};
	text-decoration: ${({ active }) => (active ? 'none' : 'underline')};
	padding: 5px 10px;
	border-radius: 3.5px;
	display: inline-block;
	transition: all 0.3s ease-in-out;
	text-underline-offset: 5px;
	text-decoration-thickness: 0.125em;

	:hover {
		color: ${colors.white1};
		background-color: ${({ dark }) => (dark ? highlights.pink : highlights.blue)};
		text-decoration: none;
	}

	@media (max-width: ${breakpoints.md}) {
		width: 100%;
		display: block;
		padding: 7.5% 1em;
		margin: 12% auto;
		text-align: center;
		text-decoration: none;
	}
`;

export default NavLink;
