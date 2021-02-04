import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostSection from '../assets/styles/postSection';
import ThemeContext from '../assets/theme/themeContext';
import Nav from '../components/nav';
import type { BlogPost as Post } from '../util/api';
import { getBlogPost, likePost, unlikePost, submitComment } from '../util/api';
import formatDate from '../util/formatDate';
import { Comment, Like, User } from '../util/icons';
import MDEditor from '../components/mdEditor';

const BlogPost = () => {
	const { dark } = useContext(ThemeContext);
	const { id } = useParams<{ id: string }>();
	const [post, setPost] = useState<Post | undefined>(undefined);
	const [showComments, setComments] = useState(false);
	const [isLiked, setLiked] = useState(false);
	const [likeCount, setCount] = useState(0);
	const [isSubmitted, setSubmitted] = useState(false);

	useEffect(() => {
		document.title = "Riday's Diary";
	}, []);

	useEffect(() => {
		let mounted = true;
		(async () => {
			if (!mounted) return undefined;
			const data = await getBlogPost(id).catch(() => undefined);
			setPost(data);

			if (data) setCount(data.likes);
			setLiked(Boolean(window.localStorage.getItem(`like-${id}`)));
		})();

		return () => {
			mounted = false;
		};
	}, [id]);

	useEffect(() => {
		const name = document.getElementById('name') as HTMLInputElement;
		const email = document.getElementById('email') as HTMLInputElement;
		const comment = document.getElementById('inputMD') as HTMLInputElement;
		if (isSubmitted) submitComment(id, name.value, email.value, comment.value);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isSubmitted]);

	return (
		<Fragment>
			<Nav active='blog' />
			<h2>Riday's Diary</h2>
			<PostSection dark={dark ? 1 : 0} className='col-11 col-md-8 col-xl-6 py-4 px-lg-5 mx-auto'>
				{post && (
					<article>
						<h5>{post.title}</h5>
						<br />
						<p dangerouslySetInnerHTML={{ __html: post.post }}></p>
						<section className='col-11 mx-auto card'>
							<div className='card-body'>
								<div className='card-title'>
									<button className='btn-primary' onClick={() => setComments(!showComments)}>
										<Comment dark={dark} />
										&ensp;{post.comments.length} Comments
									</button>
									&emsp;&emsp;
									<button
										className={isLiked ? 'btn-primary' : 'btn-outline-primary'}
										onClick={() => {
											setLiked(!isLiked);
											if (isLiked) {
												unlikePost(post.id);
												setCount(likeCount - 1);
												window.localStorage.removeItem(`like-${id}`);
											} else {
												likePost(post.id);
												setCount(likeCount + 1);
												window.localStorage.setItem(`like-${id}`, 'true');
											}
										}}
									>
										<Like dark={dark} />
										&ensp;{likeCount}
									</button>
								</div>
								{showComments && (
									<Fragment>
										<ul className='list-group list-group-flush text-start'>
											{post.comments.map(({ comment, name, timestamp }, i) => {
												return (
													<li className='list-group-item' key={i}>
														<div className='row mb-3'>
															<div className='col-md-8 text-start'>
																<User dark={dark} /> &ensp; {name}
															</div>
															<div className='col-md-4 text-md-end' id='time'>
																{formatDate(timestamp)}
															</div>
														</div>
														<p
															dangerouslySetInnerHTML={{ __html: comment }}
															className='mx-3'
														></p>
													</li>
												);
											})}
										</ul>
										<form id='newComment' className='mt-3' onSubmit={() => setSubmitted}>
											<div className='col-11 mx-auto mb-4'>
												<label htmlFor='name'>Name</label>
												<input
													type='text'
													name='name'
													id='name'
													className='form-control my-2'
													required
												/>

												<label htmlFor='email'>Email</label>
												<input
													type='text'
													name='email'
													id='email'
													className='form-control my-2'
													required
												/>
											</div>

											<MDEditor dark={dark} />
											<input
												type='submit'
												value='Add Comment'
												className='btn btn-primary mt-3'
												onClick={() => setSubmitted(!isSubmitted)}
											/>
										</form>
									</Fragment>
								)}
							</div>
						</section>
					</article>
				)}
			</PostSection>
		</Fragment>
	);
};

export default BlogPost;
