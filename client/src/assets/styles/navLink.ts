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
	text-decoration: none;
	padding: 5px 10px;
	border-radius: 3.5px;
	display: inline-block;
	transition: all 0.3s ease-in-out;

	:hover,
	:focus {
		color: ${colors.white1};
		background-color: ${({ dark }) => (dark ? highlights.pink : highlights.blue)};
		text-decoration: none;
	}

	@media (max-width: ${parseInt(breakpoints.md, 10) - 1}px) {
		width: 100%;
		display: block;
		padding: 7.5% 5px;
		margin: 6.5% auto;
		text-align: center;
	}

	@media (max-width: ${breakpoints.xs}) {
		width: 100%;
		display: block;
		padding: 2% 5px;
		font-size: 0.9rem;
		margin: 4% auto;
	}
`;

export default NavLink;
