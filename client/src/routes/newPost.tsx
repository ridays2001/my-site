import React, { Fragment, useContext, useEffect, useState } from 'react';
import PostMaker from '../assets/styles/postMaker';
import ThemeContext from '../assets/theme/themeContext';
import MDEditor from '../components/mdEditor';
import Nav from '../components/nav';
import { submitPost, verify } from '../util/api';

const NewPost = () => {
	const [loading, setLoading] = useState(true);
	const [loggedIn, setLogin] = useState(false);
	const [isSubmitted, setSubmitted] = useState(false);
	const [fail, setFail] = useState<boolean | number>(false);
	const { dark } = useContext(ThemeContext);

	useEffect(() => {
		let mounted = true;
		(async () => {
			if (!mounted) return undefined;
			const res = await verify().catch(() => undefined);
			if (res?.status === 200) setLogin(true);
			else setLogin(false);
			setLoading(false);
		})();

		return () => {
			mounted = false;
		};
	}, []);

	return (
		<Fragment>
			<Nav />
			<h2 style={{ marginTop: '1.25em' }}>Write A New Blog Post</h2>
			{loading && <div style={{ marginTop: '5em' }}>Loading...</div>}
			{!loading && loggedIn && (
				<PostMaker dark={dark ? 1 : 0} className='l1 col-md-8 col-xl-6 mx-auto text-start text-md-center'>
					{!isSubmitted && (
						<Fragment>
							<div className='row my-3'>
								<div className='col-md-3'>
									<label htmlFor='postId'>Post ID</label>
								</div>
								<div className='col-md-9'>
									<input type='text' name='postId' id='postId' className='form-control' />
								</div>
							</div>
							<div className='row mt-3'>
								<div className='col-md-3'>
									<label htmlFor='postTitle'>Post Title</label>
								</div>
								<div className='col-md-9'>
									<input type='text' name='postTitle' id='postTitle' className='form-control' />
								</div>
							</div>
							<MDEditor dark={dark} />
							<div className='row mt-4 mb-3'>
								<button
									className='col-5 col-md-4 col-xl-3 col-xxl-2 btn-primary mx-auto'
									onClick={async () => {
										const id = document.getElementById('postId') as HTMLInputElement;
										const title = document.getElementById('postTitle') as HTMLInputElement;
										const post = document.getElementById('inputMD') as HTMLInputElement;

										const res = await submitPost(id.value, title.value, post.value).catch(
											() => undefined
										);
										if (res?.status !== 201) setFail(res?.status as number);
										setSubmitted(true);
									}}
								>
									Submit
								</button>
							</div>
						</Fragment>
					)}
					{isSubmitted && !fail && (
						<main className='alert alert-success' role='alert'>
							<h4 className='alert-heading'>Submitted Successfully!</h4>
							<p>The blog post was created successfully.</p>
						</main>
					)}
					{isSubmitted && fail && (
						<main className='alert alert-danger' role='alert'>
							<h4 className='alert-heading'>Error: {fail}</h4>
							<p>
								Something went wrong while creating the new blog post. Check the error number above and
								cross check it with the server.
							</p>
						</main>
					)}
				</PostMaker>
			)}
			{!loading && !loggedIn && (
				<main className='alert alert-danger' role='alert'>
					<h4 className='alert-heading'>Forbidden: Access Denied!</h4>
					<p>
						You need to be logged in to the API to use this page. There is only one valid login for the API,
						and that's for me. If you are reading this, you most likely at the wrong place. Return to the
						home page and continue the visit.
					</p>
				</main>
			)}
		</Fragment>
	);
};

export default NewPost;
