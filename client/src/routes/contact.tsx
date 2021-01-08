import React, { Fragment, useContext, useEffect, FormEvent, useState } from 'react';
import ThemeContext from '../assets/theme/themeContext';
import Nav from '../components/nav';

const Contact = () => {
	const { dark } = useContext(ThemeContext);
	const [isNameTouched, touchName] = useState(false);
	const [isEmailTouched, touchEmail] = useState(false);
	const [isNameValid, validateName] = useState(false);
	const [isEmailValid, validateEmail] = useState(false);

	useEffect(() => {
		document.title = 'Contact Me | Riday Shah';
	}, []);

	useEffect(() => {
		const name = document.getElementById('name') as HTMLInputElement;
		const email = document.getElementById('email') as HTMLInputElement;
		if (name.value?.length > 2) validateName(true);
		if (/\w+@\w+[.].+/g.test(email.value)) validateEmail(true);
	}, [isNameTouched, isEmailTouched]);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		const name = document.getElementById('name') as HTMLInputElement;
		const email = document.getElementById('email') as HTMLInputElement;
		const message = document.getElementById('message') as HTMLInputElement;
		if (message.value.length < 10) {
			alert('Please enter a proper message to open a contact form!');
			return e.preventDefault();
		}
		e.preventDefault();
	};

	return (
		<Fragment>
			<Nav active='contact' />
			<h2>Contact Me Page</h2>

			{/* TODO:
				- Add a section to list out social profiles - GitHub, LinkedIn, Discord, Email.
				- Put the contact form in a box and re-arrange for all views.
				- Add some meaningful headings.
			*/}

			<div id='form' className='col-md-6 mx-auto'>
				<form onSubmit={handleSubmit}>
					<div className='form-group'>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							name='name'
							id='name'
							className='form-control'
							onBlur={() => touchName(true)}
						/>
					</div>

					<div className='form-group'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							name='email'
							id='email'
							className='form-control'
							onBlur={() => touchEmail(true)}
						/>
					</div>

					<div className='form-group'>
						<label htmlFor='message'>Message</label>
						<textarea name='message' id='message' className='form-control'></textarea>
					</div>

					<button type='submit' className='btn btn-primary'>
						Submit
					</button>
				</form>
			</div>
		</Fragment>
	);
};

export default Contact;
