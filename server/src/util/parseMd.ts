import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const parseMd = (md: string) => {
	marked.setOptions({
		breaks: true,
		gfm: true,
		headerIds: false,
		mangle: true,
		pedantic: false,
		smartypants: true
	});
	const parsed = marked(md);
	const window = new JSDOM('').window as unknown;
	// eslint-disable-next-line no-undef
	const purify = DOMPurify(window as Window);
	return purify.sanitize(parsed);
};

export default parseMd;
