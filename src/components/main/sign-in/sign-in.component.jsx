import React from 'react';

import FormInput from 'components/form/form-input/form-input.component';
import CustomButton from 'components/form/custom-button/custom-button.component';

import { auth, signInWithGoogle } from 'data/firebase/firebase.utils';
import { SignInContainer, SignInTitle, SignInButtons } from './sign-up.styled';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email    : '',
			password : '',
		};
	}

	handleSubmit = async (event) => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.error('Failed to sign in.', error);
		}
	};

	handleChange = (event) => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<SignInContainer>
				<SignInTitle>I have an account.</SignInTitle>
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
					<SignInButtons>
						<CustomButton id='signin-submit' type='submit'>
							Sign In
						</CustomButton>
						<CustomButton onClick={signInWithGoogle} googleSignIn>
							{' '}
							Sign In with Google{' '}
						</CustomButton>
					</SignInButtons>
				</form>
			</SignInContainer>
		);
	}
}

export default SignIn;
