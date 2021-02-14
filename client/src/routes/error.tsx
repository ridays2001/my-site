import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/nav';

const Error = () => {
	useEffect(() => {
		document.title = '404 | Riday Shah';
	}, []);

	return (
		<Fragment>
			<Nav />
			<h2 style={{ marginTop: '1.5em' }}>Oopsie! Page not found!</h2>
			<main className='l1 col-md-8 col-xl-6 mx-auto' style={{ padding: '2em' }}>
				This link doesn't exist. This can be because either the page has been moved, the page has been removed,
				or the link provided is incorrect. If you typed the link yourself, then please double check the
				spellings. If you used a bookmark then please update the link in your bookmarks. If you clicked a link
				shared by someone, then it would be a good idea to notify the person about the mistake. For now, let's
				return to the <Link to={{ pathname: '/' }}>Home page</Link>.
			</main>
		</Fragment>
	);
};

export default Error;
