import marked from 'marked';
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
	const purify = DOMPurify(new JSDOM('').window);
	return purify.sanitize(parsed);
};

export default parseMd;
