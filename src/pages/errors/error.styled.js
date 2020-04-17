import styled from 'styled-components';
import { mainTheme } from 'assets/color-palettes';

export const ErrorPageContainer = styled.div`
	width: 50vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
`;

export const ErrorTitle = styled.h1`
	font-size: 38px;
	margin: 0 auto 50px;
`;

export const ErrorMessage = styled.p`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ErrorDetail = styled.p`font-size: 26px;`;

export const ErrorLink = styled.a`
	min-width: 120px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 20px 0 20px;
	font-size: 30px;
	background-color: ${mainTheme.MainColor};
	color: ${mainTheme.MainBgColor};
	text-transform: uppercase;
	font-family: 'Open Sans Condensed';
	font-weight: bolder;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	margin-top: 50px;

	&:hover {
		background-color: ${mainTheme.MainBgColor};
		color: ${mainTheme.MainColor};
		border: 1px solid ${mainTheme.MainColor};
	}
`;
