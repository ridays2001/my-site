import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostSection from '../assets/styles/postSection';
import ThemeContext from '../assets/theme/themeContext';
import MDEditor from '../components/mdEditor';
import Nav from '../components/nav';
import type { BlogPost as Post } from '../util/api';
import { getBlogPost, likePost, submitComment, unlikePost } from '../util/api';
import formatDate from '../util/formatDate';
import { Comment, Like, User } from '../util/icons';
import Error from './error';

const BlogPost = () => {
	const { dark } = useContext(ThemeContext);
	const { id } = useParams<{ id: string }>();
	const [post, setPost] = useState<Post | undefined>(undefined);
	const [showComments, setComments] = useState(false);
	const [isLiked, setLiked] = useState(false);
	const [likeCount, setCount] = useState(0);
	const [isNameTouched, touchName] = useState(false);
	const [isNameValid, validateName] = useState(false);
	const [isEmailTouched, touchEmail] = useState(false);
	const [isEmailValid, validateEmail] = useState(false);
	const [missing, setMissing] = useState(false);

	useEffect(() => {
		document.title = "Riday's Diary";
	}, []);

	useEffect(() => {
		let mounted = true;
		(async () => {
			if (!mounted) return undefined;
			const data = await getBlogPost(id).catch(() => {
				setMissing(true);
				return undefined;
			});
			setPost(data);

			if (data) setCount(data.likes);
			setLiked(Boolean(window.localStorage.getItem(`like-${id}`)));
		})();

		return () => {
			mounted = false;
		};
	}, [id]);

	const handleSubmit = () => {
		const name = document.getElementById('name') as HTMLInputElement;
		const email = document.getElementById('email') as HTMLInputElement;
		const comment = document.getElementById('inputMD') as HTMLInputElement;

		if (!isNameValid || !isEmailValid || comment.value.length <= 2) {
			return alert('Please fill out all the details!');
		}

		submitComment(id, name.value, email.value, comment.value)
			.catch(() => undefined)
			.then(() => {
				window.location.reload();
			});
	};

	return (
		<Fragment>
			{missing && <Error />}
			{!missing && (
				<Fragment>
					<Nav active='blog' />
					<h2>Riday's Diary</h2>
					<PostSection dark={dark ? 1 : 0} className='l1 col-11 col-md-8 col-xl-6 py-4 px-lg-5 mx-auto'>
						{post && (
							<article>
								<h5>{post.title}</h5>
								<p id='post-ts' className='time'>
									{formatDate(post.timestamp, true)}
								</p>
								<br />
								<p dangerouslySetInnerHTML={{ __html: post.post }}></p>
								<section className='col-11 mx-auto card l2'>
									<div className='card-body'>
										<div className='card-title'>
											<button className='btn-primary' onClick={() => setComments(!showComments)}>
												<Comment dark={dark} />
												&ensp;{post.comments.length} Comments
											</button>
											<span className='d-none d-md-inline'>&emsp;&emsp;</span>
											<span className='d-block d-md-none'>
												<br />
											</span>
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
																	<div className='col-md-4 text-md-end time'>
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

												<div className='col-11 mx-auto mb-4'>
													<label htmlFor='name'>Name</label>
													<input
														type='text'
														name='name'
														id='name'
														className={`form-control my-2 ${
															isNameTouched
																? isNameValid
																	? 'is-valid'
																	: 'is-invalid'
																: ''
														}`}
														onBlur={() => (isNameTouched ? undefined : touchName(true))}
														onChange={() => {
															const name = document.getElementById(
																'name'
															) as HTMLInputElement;
															if (/.{2,}/g.test(name.value)) validateName(true);
															else validateName(false);
														}}
														required
													/>

													<label htmlFor='email'>Email</label>
													<input
														type='text'
														name='email'
														id='email'
														className={`form-control my-2 ${
															isEmailTouched
																? isEmailValid
																	? 'is-valid'
																	: 'is-invalid'
																: ''
														}`}
														onBlur={() => (isEmailTouched ? undefined : touchEmail(true))}
														onChange={() => {
															const email = document.getElementById(
																'email'
															) as HTMLInputElement;
															if (/\w+@\w+[.].+/g.test(email.value)) validateEmail(true);
															else validateEmail(false);
														}}
														required
													/>
												</div>

												<MDEditor dark={dark} />
												<button className='btn-primary mt-3' onClick={handleSubmit}>
													Add Comment
												</button>
											</Fragment>
										)}
									</div>
								</section>
							</article>
						)}
					</PostSection>
				</Fragment>
			)}
		</Fragment>
	);
};

export default BlogPost;
