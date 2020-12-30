import React, { Fragment, useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from '../assets/styles/hamburgerMenu';
import MobileNav from '../assets/styles/mobileNav';
import NavLink from '../assets/styles/navLink';
import ThemeContext from '../assets/theme/themeContext';
import ThemeSwitch from './themeSwitch';
import AppHeader from '../assets/styles/appHeader';

type Props = {
	active: 'home' | 'contact' | 'blog';
};

const Nav = ({ active }: Props) => {
	const { dark } = useContext(ThemeContext);
	const [open, setOpen] = useState(false);
	const [bg, setBg] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 10) setBg(true);
			else setBg(false);
		});
		return () => undefined;
	}, [bg]);

	const NavLinks = (
		<Fragment>
			<NavLink to={{ pathname: '/' }} dark={dark ? 1 : 0} active={active === 'home' ? 1 : 0}>
				Home
			</NavLink>
			<NavLink to={{ pathname: '/contact' }} dark={dark ? 1 : 0} active={active === 'contact' ? 1 : 0}>
				Contact Me
			</NavLink>
			<NavLink to={{ pathname: '/blog' }} dark={dark ? 1 : 0} active={active === 'blog' ? 1 : 0}>
				Blog
			</NavLink>
		</Fragment>
	);

	return (
		<Fragment>
			<AppHeader
				className='mt-1 d-none row d-md-flex justify-content-between sticky-top'
				bg={bg ? 1 : 0}
				dark={dark ? 1 : 0}
			>
				<Link
					to={{ pathname: '/' }}
					style={{ textDecoration: 'none', color: 'inherit', backgroundColor: 'inherit !import' }}
					className='col-md-3 col-lg-2 text-start ps-5'
				>
					<h2>Riday 💙</h2>
				</Link>
				<nav className='col-md-3 col-xl-2 offset-6 offset-lg-7 d-flex justify-content-between align-items-center'>
					{NavLinks}
				</nav>
				<div className='col-1 d-flex justify-content-end pe-5'>
					<ThemeSwitch className='my-auto' />
				</div>
			</AppHeader>
			<AppHeader
				className='d-flex row d-md-none mt-1 justify-content-between sticky-top'
				bg={bg ? 1 : 0}
				dark={dark ? 1 : 0}
			>
				<Link
					to={{ pathname: '/' }}
					style={{ textDecoration: 'none', color: 'inherit', backgroundColor: 'inherit !import' }}
					className='col-8 d-flex align-items-center ps-4'
				>
					<h2 className='d-flex align-items-center'>Riday 💙</h2>
				</Link>
				<HamburgerMenu dark={dark ? 1 : 0} />
				<button
					className={`d-flex p-0 offset-2 col-2 h-100 ${open ? 'open' : ''}`}
					onClick={() => setOpen(!open)}
					aria-label='Main Menu'
					aria-expanded={open}
					style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
				>
					<svg width='50' height='50' viewBox='0 0 100 100'>
						<path
							className='line line1'
							d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058'
						/>
						<path className='line line2' d='M 20,50 H 80' />
						<path
							className='line line3'
							d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942'
						/>
					</svg>
				</button>
				{open && (
					<MobileNav className={`text-center ${open ? 'slide-in' : ''}`} dark={dark ? 1 : 0} id='mobileNav'>
						<div className='row mt-1 mx-2'>
							<Link
								to={{ pathname: '/' }}
								style={{ textDecoration: 'none', color: 'inherit', backgroundColor: 'inherit !import' }}
								className='d-flex col-8 align-items-center'
							>
								<h2 className='d-flex align-items-center' style={{ top: '10px', left: '0' }}>
									Riday 💙
								</h2>
							</Link>
							<button
								className={`d-flex p-0 offset-2 col-2 h-100 ${open ? 'open' : ''}`}
								onClick={() => {
									if (open) {
										const nav = document.getElementById('mobileNav') as HTMLElement;
										nav.classList.remove('slide-in');
										nav.classList.add('slide-out');
										setTimeout(() => setOpen(false), 525);
									} else {
										setOpen(true);
									}
								}}
								aria-label='Main Menu'
								aria-expanded={open}
								style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
							>
								<svg width='50' height='50' viewBox='0 0 100 100'>
									<path
										className='line line1'
										d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058'
									/>
									<path className='line line2' d='M 20,50 H 80' />
									<path
										className='line line3'
										d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942'
									/>
								</svg>
							</button>
						</div>
						{NavLinks}
						<ThemeSwitch />
					</MobileNav>
				)}
			</AppHeader>
		</Fragment>
	);
};

export default Nav;
