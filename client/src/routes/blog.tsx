import type { FormEvent } from 'react';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BlogHome from '../assets/styles/blogHome';
import ThemeContext from '../assets/theme/themeContext';
import Nav from '../components/nav';
import type { BlogPost } from '../util/api';
import { getBlog, subscribe } from '../util/api';
import formatDate from '../util/formatDate';
import { Comment, Like } from '../util/icons';

const Blog = () => {
	const { dark } = useContext(ThemeContext);
	const [posts, setPosts] = useState<Array<BlogPost>>([]);
	const [showAll, setAll] = useState(false);
	const [isLoading, setLoading] = useState(true);
	const [isEmailTouched, touchEmail] = useState(false);
	const [isEmailValid, validateEmail] = useState(false);
	const [isSubmitted, setSubmitted] = useState(false);

	useEffect(() => {
		let mounted = true;
		document.title = "Riday's Diary";
		(async () => {
			if (!mounted) return undefined;
			const data = (await getBlog(showAll).catch(() => undefined)) ?? [];
			setPosts(data);
			setLoading(false);
		})();

		return () => {
			mounted = false;
		};
	}, [showAll]);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		const name = document.getElementById('name') as HTMLInputElement;
		const email = document.getElementById('email') as HTMLInputElement;
		if (!isEmailValid) return alert('Please enter a valid email id!');
		subscribe(name.value, email.value).catch(() => undefined);
		setSubmitted(true);
	};

	const handleChange = () => {
		const email = document.getElementById('email') as HTMLInputElement;
		if (/\w+@\w+[.].+/g.test(email.value)) validateEmail(true);
		else validateEmail(false);
	};

	return (
		<Fragment>
			<Nav active='blog' />
			<h2 className='mb-4'>Riday's Diary</h2>
			<BlogHome dark={dark ? 1 : 0}>
				<article className='l1 col-11 col-md-8 col-xl-6 mx-auto'>
					<h3 className='mb-3'>Recent Posts</h3>
					{isLoading && <h2>Loading...</h2>}
					{!isLoading &&
						posts.map((post) => (
							<div className='l2 card col-10 mx-auto' key={post.id}>
								<Link to={{ pathname: `/blog/posts/${post.id}` }} className='nope'>
									<div className='card-body'>
										<header className='card-title'>{post.title}</header>
										<section className='d-md-none card-text'>
											{formatDate(post.timestamp)}
											<br />
											<br />
											{post.comments.length} <Comment dark={dark} />
											&ensp;{post.likes} <Like dark={dark} />
										</section>
										<section className='d-none d-md-block card-text'>
											{formatDate(post.timestamp)}・{post.comments.length} <Comment dark={dark} />
											&ensp;{post.likes} <Like dark={dark} />
										</section>
									</div>
								</Link>
							</div>
						))}
					{!showAll && (
						<button className='btn-primary' onClick={() => setAll(true)}>
							Show All
						</button>
					)}
				</article>
				{!isSubmitted && (
					<aside className='l1 col-11 col-md-6 h-100 mx-auto'>
						Join My Mailing List!
						<form onSubmit={handleSubmit}>
							<div className='mt-3 col-md-9 mx-auto text-md-start'>
								<label htmlFor='name'>Name</label>
								<input type='text' name='name' id='name' className='form-control mb-3' required />

								<label htmlFor='email'>Email</label>
								<input
									type='email'
									name='email'
									id='email'
									className={`form-control ${
										isEmailTouched ? (isEmailValid ? 'is-valid' : 'is-invalid') : ''
									}`}
									onChange={handleChange}
									onBlur={() => (isEmailTouched ? undefined : touchEmail(true))}
									required
								/>
							</div>

							<button type='submit' className='mt-3 btn-primary mx-auto'>
								Submit
							</button>
						</form>
					</aside>
				)}
				{isSubmitted && (
					<aside className='l1 col-11 col-md-6 h-100 p-5 mx-auto'>
						Thank you for joining the mailing list! Expect an email every week or so, when I write new blog
						posts. An automated email will be sent to the name and email that you provided.
					</aside>
				)}
			</BlogHome>
		</Fragment>
	);
};

export default Blog;
