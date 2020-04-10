import React from 'react';

import SignIn from 'components/main/sign-in/sign-in.component';
import SignUp from 'components/main/sign-up/sign-up.component';

import './Signin-and-Reg.styles.scss';

const SignInAndReg = () => (
	<div>
		<h1>Are you a member?</h1>
		<div className='sign-in-and-reg'>
			<SignIn />
			<SignUp />
		</div>
	</div>
);

export default SignInAndReg;
