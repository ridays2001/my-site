import React, { useEffect, useState } from 'react';
import MD from '../assets/styles/md';
import { parseMd } from '../util/api';

const PenIcon = () => (
	<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 24 24' aria-label='Edit' role='img'>
		<path d='M8.707 19.707L18 10.414 13.586 6l-9.293 9.293c-.128.128-.219.289-.263.464L3 21l5.242-1.03C8.418 19.926 8.579 19.835 8.707 19.707zM21 7.414c.781-.781.781-2.047 0-2.828L19.414 3c-.781-.781-2.047-.781-2.828 0L15 4.586 19.414 9 21 7.414z'></path>
	</svg>
);

const EyeIcon = () => (
	<svg width='36' height='36' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
		<g clipPath='url(#clip0)'>
			<path d='M23.8555 11.3156C21.5959 6.35578 17.1226 3 12.0005 3C6.87844 3 2.40386 6.35813 0.145523 11.3161C0.0502068 11.5282 0.000545502 11.7626 0.000545502 12.0002C0.000545502 12.2379 0.0502068 12.4723 0.145523 12.6844C2.40511 17.6442 6.87844 21 12.0005 21C17.1226 21 21.5972 17.6419 23.8555 12.6839C23.9508 12.4718 24.0005 12.2374 24.0005 11.9998C24.0005 11.7621 23.9508 11.5277 23.8555 11.3156V11.3156ZM12.0005 18.75C10.8138 18.75 9.65379 18.3541 8.6671 17.6124C7.6804 16.8707 6.91137 15.8165 6.45724 14.5831C6.00312 13.3497 5.8843 11.9925 6.11581 10.6831C6.34732 9.37377 6.91877 8.17103 7.75788 7.22703C8.597 6.28302 9.66609 5.64015 10.83 5.3797C11.9939 5.11925 13.2003 5.25292 14.2966 5.76381C15.393 6.2747 16.33 7.13987 16.9893 8.2499C17.6486 9.35993 18.0005 10.665 18.0005 12C18.0009 12.8865 17.846 13.7645 17.5446 14.5836C17.2432 15.4028 16.8012 16.1471 16.244 16.7739C15.6868 17.4008 15.0252 17.898 14.2971 18.2371C13.5689 18.5761 12.7886 18.7504 12.0005 18.75V18.75ZM12.0005 7.5C11.6435 7.50561 11.2888 7.56537 10.9459 7.67766C11.2285 8.10969 11.3641 8.64135 11.3282 9.17622C11.2922 9.71109 11.087 10.2138 10.7499 10.593C10.4127 10.9723 9.96594 11.2031 9.4905 11.2436C9.01506 11.2841 8.54247 11.1315 8.15844 10.8136C7.93976 11.72 7.97923 12.6807 8.27131 13.5605C8.56338 14.4403 9.09334 15.1949 9.78661 15.7181C10.4799 16.2413 11.3015 16.5068 12.1359 16.4771C12.9703 16.4475 13.7754 16.1242 14.438 15.5528C15.1005 14.9814 15.5871 14.1907 15.8292 13.2919C16.0713 12.3931 16.0568 11.4315 15.7877 10.5425C15.5186 9.65342 15.0085 8.88171 14.3291 8.33593C13.6497 7.79015 12.8353 7.49779 12.0005 7.5V7.5Z' />
		</g>
		<defs>
			<clipPath id='clip0'>
				<rect width='24' height='24' />
			</clipPath>
		</defs>
	</svg>
);

interface Props {
	dark: boolean;
}

const MDEditor = ({ dark }: Props) => {
	const [preview, showPreview] = useState(false);
	const [text, setText] = useState('');
	const [parsed, setParsed] = useState('No Content.');

	useEffect(() => {
		let mounted = true;
		if (mounted) setParsed('Loading...');
		(async () => {
			if (!mounted) return undefined;
			if (text.length > 0) {
				const md = await parseMd(text).catch(() => undefined);
				setParsed(md?.parsed || '');
			} else {
				setParsed('No Content.');
			}
		})();

		return () => {
			mounted = false;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [preview]);

	return (
		<MD dark={dark ? 1 : 0}>
			<div className='tabs row justify-content-evenly'>
				<button
					className={`d-flex justify-content-center align-items-center tab ${!preview ? 'active' : ''}`}
					id='edit'
					onClick={() => showPreview(false)}
				>
					<PenIcon />
					<span className='d-none d-md-inline'>&emsp;Editor</span>
				</button>

				<button
					className={`d-flex justify-content-center align-items-center tab ${preview ? 'active' : ''}`}
					id='preview'
					onClick={() => showPreview(true)}
				>
					<EyeIcon />
					<span className='d-none d-md-inline'>&emsp;Preview</span>
				</button>

				<input type='hidden' name='markdown' id='inputMD' value={text} />
			</div>
			{!preview && (
				<textarea
					className='content form-control'
					id='markdown'
					onChange={(e) => setText(e.target.value)}
					value={text}
				></textarea>
			)}
			{preview && (
				<div className='content'>
					<span dangerouslySetInnerHTML={{ __html: parsed }}></span>
				</div>
			)}
		</MD>
	);
};

export default MDEditor;
