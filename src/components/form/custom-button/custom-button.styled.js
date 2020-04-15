import styled, { css } from 'styled-components';
import { mainTheme } from 'assets/color-palettes';

const customButtonStyles = css`
	background-color: ${mainTheme.MainColor};
	color: ${mainTheme.MainBgColor};
	border: none;

	&:hover {
		background-color: ${mainTheme.MainBgColor};
		color: ${mainTheme.MainColor};
		border: 1px solid ${mainTheme.MainColor};
	}
`;

const invertedButtonStyles = css`
	background-color: ${mainTheme.MainBgColor};
	color: ${mainTheme.MainColor};
	border: 2px solid ${mainTheme.MainColor};

	&:hover {
		background-color: ${mainTheme.MainColor};
		color: ${mainTheme.MainBgColor};
		border: none;
	}
`;

const googleSignInStyles = css`
	background-color: ${mainTheme.GoogleBlue};
	color: ${mainTheme.MainBgColor};

	&:hover {
		background-color: ${mainTheme.GoogleBlueHov};
	}
`;

const getButtonStyles = (props) => {
	if (props.googleSignIn) {
		return googleSignInStyles;
	} else if (props.inverted) {
		return invertedButtonStyles;
	}

	return customButtonStyles;
};

export const CustomButtonContainer = styled.button`
	min-width: 120px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 20px 0 20px;
	font-size: 15px;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed';
	font-weight: bolder;
	cursor: pointer;
	display: flex;
	justify-content: center;

	${getButtonStyles};
`;
