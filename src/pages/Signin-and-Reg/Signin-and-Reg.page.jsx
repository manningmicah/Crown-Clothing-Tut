import React from 'react';

import { SignInAndRegContainer } from './Signin-and-Reg.styled';
import SignIn from 'components/main/sign-in/sign-in.component';
import SignUp from 'components/main/sign-up/sign-up.component';

const SignInAndReg = () => (
	<div>
		<h1>Are you a member?</h1>
		<SignInAndRegContainer>
			<SignIn />
			<SignUp />
		</SignInAndRegContainer>
	</div>
);

export default SignInAndReg;
