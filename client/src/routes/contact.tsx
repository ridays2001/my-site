import React, { FormEvent, Fragment, useContext, useEffect, useState } from 'react';
import ContactSection from '../assets/styles/contactSection';
import { text } from '../assets/theme/constants';
import ThemeContext from '../assets/theme/themeContext';
import Nav from '../components/nav';
import { GitHub } from '../util/icons';
import { discordInv } from '../util/misc';

const Contact = () => {
	const { dark } = useContext(ThemeContext);
	const [isNameTouched, touchName] = useState(false);
	const [isEmailTouched, touchEmail] = useState(false);
	const [isNameValid, validateName] = useState(false);
	const [isEmailValid, validateEmail] = useState(false);
	const [isSubmitted, setSubmitted] = useState(false);

	useEffect(() => {
		document.title = 'Contact Me | Riday Shah';
	}, []);

	const handleChange = () => {
		const name = document.getElementById('name') as HTMLInputElement;
		const email = document.getElementById('email') as HTMLInputElement;
		if (name.value?.length >= 2) validateName(true);
		else validateName(false);

		if (/\w+@\w+[.].+/g.test(email.value)) validateEmail(true);
		else validateEmail(false);
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const name = document.getElementById('name') as HTMLInputElement;
		const email = document.getElementById('email') as HTMLInputElement;
		const message = document.getElementById('message') as HTMLInputElement;

		if (!isNameValid) return alert('Please enter a valid name!');
		if (!isEmailValid) return alert('Please enter a valid email!');
		if (message.value.length < 10) {
			return alert('Please enter a proper message so that I can get back to you.');
		}
	};

	return (
		<Fragment>
			<Nav active='contact' />
			<ContactSection dark={dark ? 1 : 0}>
				<h2>Contact Me</h2>

				{/* TODO:
					- Form submission confirmation message.
					- Setup backend and connect it.
				*/}

				<div id='social' className='col-md-8 col-xl-6 mx-auto'>
					The fastest way to contact me would be either to send me a message on Discord, or send me an email.
					I typically reply within a few mins during the day. Meanwhile, you can stalk me on my social
					profiles:
					<ul className='mt-3 col-md-10 col-xl-8 mx-auto text-start list-unstyled row'>
						<li className='col-md-6'>
							<a href={discordInv}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill={dark ? text.darkHigh : '#7289da'}
									aria-label='Discord Icon'
								>
									<path d='M9.593,10.971c-0.542,0-0.969,0.475-0.969,1.055c0,0.578,0.437,1.055,0.969,1.055c0.541,0,0.968-0.477,0.968-1.055 C10.572,11.445,10.134,10.971,9.593,10.971z M13.061,10.971c-0.542,0-0.969,0.475-0.969,1.055c0,0.578,0.437,1.055,0.969,1.055 c0.541,0,0.968-0.477,0.968-1.055C14.028,11.445,13.602,10.971,13.061,10.971z'></path>
									<path d='M17.678,3H4.947C3.874,3,3,3.874,3,4.957v12.844c0,1.083,0.874,1.957,1.947,1.957h10.773l-0.505-1.759l1.217,1.131 l1.149,1.064L19.625,22V4.957C19.625,3.874,18.751,3,17.678,3z M14.01,15.407c0,0-0.342-0.408-0.626-0.771 c1.244-0.352,1.719-1.13,1.719-1.13c-0.39,0.256-0.76,0.438-1.093,0.562c-0.475,0.198-0.93,0.331-1.377,0.408 c-0.912,0.17-1.748,0.123-2.461-0.01c-0.541-0.105-1.006-0.257-1.396-0.41c-0.218-0.085-0.457-0.188-0.693-0.321 c-0.029-0.021-0.057-0.029-0.085-0.048c-0.02-0.01-0.029-0.019-0.039-0.03c-0.171-0.094-0.266-0.16-0.266-0.16 s0.456,0.76,1.663,1.121c-0.285,0.36-0.637,0.789-0.637,0.789c-2.099-0.067-2.896-1.444-2.896-1.444 c0-3.059,1.368-5.538,1.368-5.538c1.368-1.027,2.669-0.998,2.669-0.998l0.095,0.114c-1.71,0.495-2.499,1.245-2.499,1.245 s0.21-0.114,0.561-0.275c1.016-0.446,1.823-0.57,2.156-0.599c0.057-0.009,0.105-0.019,0.162-0.019 c0.58-0.076,1.235-0.095,1.918-0.019c0.903,0.105,1.873,0.371,2.86,0.912c0,0-0.751-0.712-2.366-1.206l0.133-0.152 c0,0,1.302-0.029,2.669,0.998c0,0,1.368,2.479,1.368,5.538C16.917,13.963,16.11,15.34,14.01,15.407z'></path>
								</svg>
								&ensp;Discord
							</a>
						</li>

						<li className='col-md-6'>
							<a href='https://github.com/ridays2001'>
								<GitHub dark={dark} />
								&ensp;GitHub
							</a>
						</li>

						<li className='col-md-6'>
							<a href='mailto:ridayshah2001@gmail.com'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill={dark ? text.darkHigh : text.lightHigh}
									aria-label='Email Icon'
								>
									<path d='M20,4H6C4.897,4,4,4.897,4,6v5h2V8l6.4,4.8c0.178,0.133,0.389,0.2,0.6,0.2s0.422-0.067,0.6-0.2L20,8v9h-8v2h8 c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M13,10.75L6.666,6h12.668L13,10.75z'></path>
									<path d='M2 12H9V14H2zM4 15H10V17H4zM7 18H11V20H7z'></path>
								</svg>
								&ensp;Email
							</a>
						</li>

						<li className='col-md-6'>
							<a href='https://www.linkedin.com/in/ridays2001/'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill={dark ? text.darkHigh : '#0077b5'}
									aria-label='LinkedIn Icon'
								>
									<path d='M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z M8.339,18.337H5.667 v-8.59h2.672V18.337z M7.003,8.574c-0.856,0-1.548-0.694-1.548-1.548s0.691-1.548,1.548-1.548c0.854,0,1.548,0.693,1.548,1.548 S7.857,8.574,7.003,8.574z M18.338,18.337h-2.669V14.16c0-0.996-0.018-2.277-1.388-2.277c-1.39,0-1.601,1.086-1.601,2.207v4.248 h-2.667v-8.59h2.56v1.174h0.037c0.355-0.675,1.227-1.387,2.524-1.387c2.704,0,3.203,1.778,3.203,4.092V18.337z'></path>
								</svg>
								&ensp;LinkedIn
							</a>
						</li>

						<li className='col-md-6'>
							<a href='https://twitter.com/ridays2001'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill={dark ? text.darkHigh : '#1da1f2'}
									aria-label='Twitter Icon'
								>
									<path d='M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809 c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793 c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05 c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032 c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028 c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22 c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z'></path>
								</svg>
								&nbsp;Twitter
							</a>
						</li>

						<li className='col-md-6'>
							<a href='https://www.reddit.com/user/Riday2001'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='24'
									height='24'
									viewBox='0 0 24 24'
									fill={dark ? text.darkHigh : '#ff4500'}
									aria-label='Reddit Icon'
								>
									<circle cx='9.67' cy='13' r='1.001'></circle>
									<path d='M14.09,15.391C13.482,15.826,12.746,16.041,12,16c-0.744,0.034-1.479-0.189-2.081-0.63c-0.099-0.081-0.242-0.081-0.342,0 c-0.115,0.095-0.132,0.265-0.037,0.38c0.71,0.535,1.582,0.809,2.471,0.77c0.887,0.039,1.76-0.233,2.469-0.77v0.04 c0.109-0.106,0.111-0.285,0.006-0.396C14.377,15.284,14.2,15.282,14.09,15.391z M14.299,12.04c-0.552,0-0.999,0.448-0.999,1.001 c0,0.552,0.447,0.999,0.999,0.999l-0.008,0.039c0.016,0.002,0.033,0,0.051,0c0.551-0.021,0.979-0.487,0.958-1.038 C15.3,12.488,14.854,12.04,14.299,12.04z'></path>
									<path d='M12,2C6.479,2,2,6.477,2,12c0,5.521,4.479,10,10,10c5.521,0,10-4.479,10-10C22,6.477,17.521,2,12,2z M17.859,13.33 c0.012,0.146,0.012,0.293,0,0.439c0,2.24-2.609,4.062-5.83,4.062c-3.221,0-5.83-1.82-5.83-4.062c-0.012-0.146-0.012-0.293,0-0.439 c-0.145-0.066-0.275-0.155-0.392-0.264c-0.587-0.553-0.614-1.478-0.063-2.063c0.552-0.588,1.477-0.616,2.063-0.063 c1.152-0.781,2.509-1.209,3.899-1.23l0.743-3.47c0-0.001,0-0.002,0-0.004C12.487,6.069,12.652,5.964,12.82,6l2.449,0.49 c0.16-0.275,0.44-0.458,0.758-0.492c0.55-0.059,1.041,0.338,1.102,0.888c0.059,0.549-0.338,1.042-0.889,1.101 c-0.549,0.059-1.041-0.338-1.102-0.887L13,6.65l-0.649,3.12c1.375,0.029,2.711,0.457,3.85,1.23c0.259-0.248,0.599-0.393,0.957-0.406 c0.807-0.029,1.482,0.6,1.512,1.406C18.68,12.563,18.363,13.08,17.859,13.33z'></path>
								</svg>
								&ensp;Reddit
							</a>
						</li>
					</ul>
				</div>

				<div id='form' className='col-md-8 col-xl-6 mx-auto text-start text-md-center'>
					<h4 className='mt-2 mb-5 text-center'>Contact Form</h4>
					<form onSubmit={handleSubmit}>
						<div className='row my-3'>
							<div className='col-md-3'>
								<label htmlFor='name'>Name</label>
							</div>
							<div className='col-md-9'>
								<input
									type='text'
									name='name'
									id='name'
									className={`form-control ${
										isNameTouched ? (isNameValid ? 'is-valid' : 'is-invalid') : ''
									}`}
									onChange={handleChange}
									onBlur={() => (isNameTouched ? undefined : touchName(true))}
								/>
							</div>
						</div>

						<div className='row my-3'>
							<div className='col-md-3'>
								<label htmlFor='email'>Email</label>
							</div>
							<div className='col-md-9'>
								<input
									type='email'
									name='email'
									id='email'
									className={`form-control ${
										isEmailTouched ? (isEmailValid ? 'is-valid' : 'is-invalid') : ''
									}`}
									onChange={handleChange}
									onBlur={() => (isEmailTouched ? undefined : touchEmail(true))}
								/>
							</div>
						</div>

						<div className='row my-3'>
							<div className='col-md-3'>
								<label htmlFor='message'>Message</label>
							</div>
							<div className='col-md-9'>
								<textarea name='message' id='message' className='form-control' rows={5}></textarea>
							</div>
						</div>

						<div className='row mt-5 mb-3'>
							<button type='submit' className='col-5 col-md-4 col-xl-3 col-xxl-2 btn btn-primary mx-auto'>
								Submit
							</button>
						</div>
					</form>
				</div>
			</ContactSection>
		</Fragment>
	);
};

export default Contact;
