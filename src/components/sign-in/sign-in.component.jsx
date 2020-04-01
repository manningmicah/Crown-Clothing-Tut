import React from 'react';

import FormInput from '../form/form-input/form-input.component';
import CustomButton from '../form/custom-button/custom-button.component';

import { signInWithGoogle } from '../../data/firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email    : '',
			password : '',
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({ email: '', password: '' });
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='sign-in'>
				<h2>I have an account.</h2>
				<span>Sign in with email and password.</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						id='signin-email'
						name='email'
						type='email'
						label='Email'
						value={this.state.email}
						onChange={this.handleChange}
						required
					/>
					<FormInput
						id='signin-pass'
						name='password'
						type='password'
						label='Password'
						value={this.state.password}
						onChange={this.handleChange}
						required
					/>
					<div className='buttons'>
						<CustomButton id='signin-submit' type='submit'>
							Sign In
						</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							{' '}
							Sign In with Google{' '}
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
