import React from 'react';

import { ErrorPageContainer, ErrorTitle, ErrorMessage, ErrorDetail, ErrorLink } from './error.styled';
const ErrorPage = ({ type, timeStamp }) => {
	const errorCode = `${type}@${timeStamp}`;
	const mailTo = `mailto:manningmicah@gmail.com?subject= CrownTG-Error: ${errorCode}`;
	return (
		<ErrorPageContainer>
			<ErrorTitle>{`Error: ${type}.`}</ErrorTitle>
			<ErrorMessage>
				<ErrorDetail>Please, try back later, we seem to be experiencing issues.</ErrorDetail>
				<ErrorDetail>Error Code: {`${errorCode}`}</ErrorDetail>
			</ErrorMessage>
			<ErrorLink role='button' href={mailTo}>
				Email us about it!
			</ErrorLink>
		</ErrorPageContainer>
	);
};

export default ErrorPage;
