import React from 'react';
const ErrorPage = ({ type, timeStamp }) => {
	const errorCode = `${type}@${timeStamp}`;
	return (
		<div className='errorPage'>
			<h1>{`Error: ${type}.`}</h1>
			<div>
				<p>Please, try back later, we seem to be experiencing issues.</p>
				<p>Error Code: {`${errorCode}`}</p>
			</div>
			<a href={`mailto:manningmicah@gmail.com?subject= CrownTG-Error: ${errorCode}`}>Email Us about it!</a>
		</div>
	);
};

export default ErrorPage;
