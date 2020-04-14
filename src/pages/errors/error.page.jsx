import React from 'react';

import './error.styles.scss';

const ErrorPage = ({ type, timeStamp }) => {
	const errorCode = `${type}@${timeStamp}`;
	const mailTo = `mailto:manningmicah@gmail.com?subject= CrownTG-Error: ${errorCode}`;
	return (
		<div className='error-page'>
			<h1 className='error-title'>{`Error: ${type}.`}</h1>
			<div className='error-message'>
				<p className='error-detail'>Please, try back later, we seem to be experiencing issues.</p>
				<p className='error-detail'>Error Code: {`${errorCode}`}</p>
			</div>
			<a className='error-link' role='button' href={mailTo}>
				Email us about it!
			</a>
		</div>
	);
};

export default ErrorPage;
