import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, removeBtn, ...otherProps }) => (
	<button
		className={`${isGoogleSignIn ? 'google-sign-in ' : ''}${inverted ? 'inverted ' : ''}${removeBtn
			? 'remove-btn '
			: ''}custom-button`}
		{...otherProps}
	>
		{children}
	</button>
);

export default CustomButton;
