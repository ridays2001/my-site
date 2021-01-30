import React, { Fragment, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostSection from '../assets/styles/postSection';
import ThemeContext from '../assets/theme/themeContext';
import Nav from '../components/nav';
import type { BlogPost as Post } from '../util/api';
import { getBlogPost, likePost, unlikePost } from '../util/api';
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

	/* TODO:
	 * Add option for comments.
	 * Make a markdown editor.
	 */

	useEffect(() => {
		const text = document.getElementById('inputMD') as HTMLInputElement;
		console.log(text?.value);
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
										<MDEditor dark={dark} />
										<button className='btn-primary' onClick={() => setSubmitted(!isSubmitted)}>
											Submit
										</button>
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
