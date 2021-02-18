import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/nav';
import { unsubscribe } from '../util/api';

const BlogUnsubscribe = () => {
	const [isSubmitted, setSubmitted] = useState(false);
	const [hasFailed, setFail] = useState(false);
	const [isTouched, touch] = useState(false);
	const [isValid, validate] = useState(false);

	return (
		<Fragment>
			<Nav />
			<article id='form' className='l1 col-md-8 col-xl-6 mx-auto text-start text-md-center'>
				<h4 className={`mt-2 ${isSubmitted ? 'mb-3' : 'mb-5'} text-center`}>Contact Form</h4>
				{!isSubmitted && (
					<form
						onSubmit={async (e) => {
							e.preventDefault();
							const email = document.getElementById('email') as HTMLInputElement;
							if (!isValid) return alert('Please enter a valid email!');
							const res = await unsubscribe(email.value).catch(() => undefined);
							if (res?.status !== 200) setFail(true);
							setSubmitted(true);
						}}
					>
						<div className='row my-3'>
							<div className='col-md-3'>
								<label htmlFor='email'>Email</label>
							</div>
							<div className='col-md-9'>
								<input
									type='email'
									name='email'
									id='email'
									className={`form-control ${isTouched ? (isValid ? 'is-valid' : 'is-invalid') : ''}`}
									onChange={() => {
										const email = document.getElementById('email') as HTMLInputElement;
										if (/\w+@\w+[.].+/g.test(email.value)) validate(true);
										else validate(false);
									}}
									onBlur={() => (isTouched ? undefined : touch(true))}
									required
								/>
							</div>
						</div>

						<div className='row mt-5 mb-3'>
							<button type='submit' className='col-5 col-md-4 col-xl-3 col-xxl-2 btn-primary mx-auto'>
								Submit
							</button>
						</div>
					</form>
				)}
				{isSubmitted && !hasFailed && (
					<main className='alert alert-success' role='alert'>
						<h4 className='alert-heading'>Submitted Successfully!</h4>
						<p>
							Your name has been removed from my mailing list. You will no longer receive any emails from
							me.
						</p>
					</main>
				)}
				{isSubmitted && hasFailed && (
					<main className='alert alert-danger' role='alert'>
						<h4 className='alert-heading'>Something Went Wrong!</h4>
						<p>
							Something went wrong while contacting the server. Your request was{' '}
							<strong>not received</strong>. Please try again later, or{' '}
							<Link to={{ pathname: '/contact' }}>Contact Me.</Link>
						</p>
					</main>
				)}
			</article>
		</Fragment>
	);
};

export default BlogUnsubscribe;
