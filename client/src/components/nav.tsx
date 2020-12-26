import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitch from './themeSwitch';
import ThemeContext from '../assets/theme/themeContext';
import NavLink from '../assets/styles/navLink';
import HamburgerMenu from '../assets/styles/hamburgerMenu';
import MobileNav from '../assets/styles/mobileNav';

type Props = {
	active: 'home' | 'contact' | 'blog';
};

const Nav = ({ active }: Props) => {
	const { dark } = useContext(ThemeContext);
	const [open, setOpen] = useState(false);
	return (
		<Fragment>
			<header className='mt-1 mx-2 row d-none d-md-flex justify-content-between'>
				<Link
					to={{ pathname: '/' }}
					style={{ textDecoration: 'none', color: 'inherit' }}
					className='col-md-3 col-lg-2'
				>
					<h2>Riday 💙</h2>
				</Link>
				<nav className='col-md-2 offset-6 d-flex justify-content-between align-items-center'>
					<NavLink dark={dark} href='https://www.google.com' active={active === 'home'}>
						Home
					</NavLink>
					<NavLink dark={dark} href='https://www.google.com' active={active === 'contact'}>
						Contact Me
					</NavLink>
					<NavLink dark={dark} href='https://www.google.com' active={active === 'blog'}>
						Blog
					</NavLink>
				</nav>
				<div className='col-1 d-flex justify-content-end'>
					<ThemeSwitch className='my-auto' />
				</div>
			</header>
			<header className='d-flex d-md-none mt-1 mx-2 row justify-content-between'>
				<h2 className='d-flex align-items-center col-8'>Riday 💙</h2>
				<HamburgerMenu dark={dark} />
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
					<MobileNav className={`text-center ${open ? 'slide-in' : ''}`} dark={dark} id='mobileNav'>
						<div className='row mt-1 mx-2'>
							<h2 className='d-flex col-8 align-items-center' style={{ top: '10px', left: '10px' }}>
								Riday 💙
							</h2>
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
						<NavLink dark={dark} href='https://www.google.com' active={active === 'home'}>
							Home
						</NavLink>
						<NavLink dark={dark} href='https://www.google.com' active={active === 'contact'}>
							Contact Me
						</NavLink>
						<NavLink dark={dark} href='https://www.google.com' active={active === 'blog'}>
							Blog
						</NavLink>
						<ThemeSwitch />
					</MobileNav>
				)}
			</header>
		</Fragment>
	);
};

export default Nav;
