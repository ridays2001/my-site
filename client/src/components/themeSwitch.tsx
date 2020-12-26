import React, { useContext } from 'react';
import Switch from 'react-switch';
import ThemeContext from '../assets/theme/themeContext';
import { MoonFillIcon, MoonIcon, SunFillIcon, SunIcon } from '../assets/theme/themeIcons';

const ThemeSwitch = ({ className }: { className?: string }) => {
	const { dark, toggle } = useContext(ThemeContext);
	return (
		<Switch
			className={className}
			checked={dark}
			onChange={toggle}
			onColor='#b7d2da'
			offColor='#f48037'
			width={64}
			height={32}
			checkedHandleIcon={
				<div
					role='img'
					aria-label='Dark Mode'
					className='d-flex justify-content-center align-items-center h-100'
				>
					<MoonFillIcon />
				</div>
			}
			checkedIcon={
				<div
					role='img'
					aria-label='Light Mode'
					className='d-flex justify-content-center align-items-center h-100'
				>
					<SunIcon />
				</div>
			}
			uncheckedIcon={
				<div
					role='img'
					aria-label='Dark Mode'
					className='d-flex justify-content-center align-items-center h-100'
				>
					<MoonIcon />
				</div>
			}
			uncheckedHandleIcon={
				<div
					role='img'
					aria-label='Light Mode'
					className='d-flex justify-content-center align-items-center h-100'
				>
					<SunFillIcon />
				</div>
			}
		/>
	);
};

export default ThemeSwitch;
