import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NewReview from '../assets/styles/newReview';
import ThemeContext from '../assets/theme/themeContext';
import Nav from '../components/nav';
import { submitTestimonial } from '../util/api';
import { Star, StarFill } from '../util/icons';

const NewTestimonial = () => {
	const { dark } = useContext(ThemeContext);
	const [count, setCount] = useState(1);
	const [rating, setRating] = useState(1);
	const [isMessageTouched, touchMessage] = useState(false);
	const [isMessageValid, validateMessage] = useState(false);
	const [isSubmitted, setSubmitted] = useState(false);
	const [hasFailed, setFail] = useState(false);

	useEffect(() => {
		document.title = 'New Testimonial | Riday Shah';
	}, []);

	return (
		<Fragment>
			<Nav active='home' />
			<h2 className='mt-2'>Add Your Own Testimonial</h2>
			<NewReview dark={dark ? 1 : 0} className='col-md-8 col-xl-6 row mt-4 mx-auto text-start text-md-center'>
				{!isSubmitted && (
					<Fragment>
						<div className='row my-3'>
							<div className='col-md-3'>
								<label htmlFor='name'>Name</label>
							</div>
							<div className='col-md-9'>
								<input type='text' name='name' id='name' className='form-control' />
							</div>
						</div>
						<div className='row my-3'>
							<div className='col-md-3'>
								<label htmlFor='rating'>Rating</label>
							</div>
							<div className='col-md-9'>
								{new Array(5).fill('x').map((_, i) => {
									if (i < count)
										return (
											<StarFill
												dark={dark}
												key={i}
												mouseEnter={() => setCount(i + 1)}
												mouseLeave={() => setCount(rating)}
												click={() => setRating(i + 1)}
											/>
										);
									return (
										<Star
											dark={dark}
											key={i}
											mouseEnter={() => setCount(i + 1)}
											mouseLeave={() => setCount(rating)}
											click={() => setRating(i + 1)}
										/>
									);
								})}
							</div>
						</div>
						<div className='row my-3'>
							<div className='col-md-3'>
								<label htmlFor='message'>Message</label>
							</div>
							<div className='col-md-9'>
								<textarea
									name='message'
									id='message'
									className={`form-control${
										isMessageTouched ? (isMessageValid ? ' is-valid' : ' is-invalid') : ''
									}`}
									rows={5}
									onChange={() => {
										const message = document.getElementById('message') as HTMLInputElement;
										if (message.value.length >= 25) validateMessage(true);
										else validateMessage(false);
									}}
									onBlur={() => (isMessageTouched ? undefined : touchMessage(true))}
								></textarea>
							</div>
						</div>

						<button
							className='btn-primary col-6 col-md-3 col-xl-2 mx-auto mt-3'
							onClick={() => {
								const name = document.getElementById('name') as HTMLInputElement;
								const message = document.getElementById('message') as HTMLInputElement;

								if (name.value.length < 2) return alert('Please enter your name!');
								if (message.value.length < 25)
									return alert('Please use at least 25 characters to describe your experience.');

								submitTestimonial(name.value, rating, message.value)
									.catch(() => undefined)
									.then((res) => {
										setSubmitted(true);
										if (res?.status !== 201) setFail(true);
									});
							}}
						>
							Submit
						</button>

						<article>
							<h4>Note:</h4>
							<div className='row my-3'>
								<span className='marker col-1'>▹</span>
								<span className='col-11'>
									Please use the name with which I recognize you. If you use your nickname, I may not
									recognize your real name.
								</span>
							</div>
							<div className='row my-3'>
								<span className='marker col-1'>▹</span>
								<span className='col-11'>Please be civil and avoid profanity.</span>
							</div>
							<div className='row my-3'>
								<span className='marker col-1'>▹</span>
								<span className='col-11'>Spammy entries will be removed.</span>
							</div>
							<div className='row my-3'>
								<span className='marker col-1'>▹</span>
								<span className='col-11'>
									Please use as many words as possible to describe your experience. Just putting a
									"he's a good/bad programmer" is not helpful at all.
								</span>
							</div>
							<div className='row my-3'>
								<span className='marker col-1'>▹</span>
								<span className='col-11'>You can submit a testimonial only once.</span>
							</div>
						</article>
					</Fragment>
				)}
				{isSubmitted && !hasFailed && (
					<main className='alert alert-success' role='alert'>
						<h4 className='alert-heading'>Submitted Successfully!</h4>
						<p>
							Thank you for sharing your testimonial. I really appreciate it. You can go back to{' '}
							<Link to={{ pathname: '/' }}>Home</Link> to check your newly submitted testimonial.
						</p>
					</main>
				)}
				{isSubmitted && hasFailed && (
					<main className='alert alert-danger' role='alert'>
						<h4 className='alert-heading'>Something Went Wrong!</h4>
						<p>
							Something went wrong while submitting the testimonial to the server. Your testimonial was{' '}
							<strong>not received</strong>. Please try again later, or{' '}
							<Link to={{ pathname: '/contact' }}>Contact Me.</Link>
						</p>
					</main>
				)}
			</NewReview>
		</Fragment>
	);
};

export default NewTestimonial;
