import React, { Fragment } from 'react';
import CssLogo from '../assets/images/CSS.svg';
import ElectronLogo from '../assets/images/Electron.svg';
import EslintLogo from '../assets/images/ESLint.svg';
import HtmlLogo from '../assets/images/HTML.svg';
import JavaLogo from '../assets/images/Java.svg';
import JsLogo from '../assets/images/JS.svg';
import NodeLogo from '../assets/images/Node.svg';
import ReactLogo from '../assets/images/React.svg';
import TsLogo from '../assets/images/TS.svg';

export const css = {
	name: 'CSS',
	logo: CssLogo
};

export const electron = {
	name: 'Electron',
	logo: ElectronLogo
};

export const eslint = {
	name: 'ESLint',
	logo: EslintLogo
};

export const html = {
	name: 'HTML',
	logo: HtmlLogo
};

export const java = {
	name: 'Java',
	logo: JavaLogo
};

export const js = {
	name: 'Javascript',
	logo: JsLogo
};

export const node = {
	name: 'Node.js',
	logo: NodeLogo
};

export const react = {
	name: 'React',
	logo: ReactLogo
};

export const ts = {
	name: 'Typescript',
	logo: TsLogo
};

const Languages = ({ list }: { list: Array<{ name: string; logo: string }> }) => (
	<Fragment>
		{list.map(({ name, logo }) => (
			<Fragment>
				<abbr title={name}>
					<img src={logo} alt={name} className='mx-1 mx-md-2' />
				</abbr>
			</Fragment>
		))}
	</Fragment>
);

export default Languages;
