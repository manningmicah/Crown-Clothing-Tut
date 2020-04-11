import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
	<button
		className={`${isGoogleSignIn ? 'google-sign-in ' : ''}${inverted ? 'inverted ' : ''}${'remove-btn'
			? 'remove-btn '
			: ''}custom-button`}
		{...otherProps}
	>
		{children}
	</button>
);

export default CustomButton;
