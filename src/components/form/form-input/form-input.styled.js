import styled, { css } from 'styled-components';
import { mainTheme } from 'assets/color-palettes';

const shrinkLabel = css`
	top: -16px;
	font-size: 12px;
	color: ${mainTheme.MainColor};
`;

export const GroupContainer = styled.div`
	position: relative;
	margin: 45px 0;

	input[type='password'] {
		letter-spacing: 0.3em;
	}
`;

export const Input = styled.input`
	background: none;
	background-color: ${mainTheme.MainBgColor};
	color: ${mainTheme.SubColor};
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	display: block;
	width: 100%;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid ${mainTheme.SubColor};
	margin: 25px 0;

	&:focus,
	&:hover {
		outline: none;
	}

	&:focus + label,
	&:hover + label {
		${shrinkLabel};
	}
`;

export const InputLabel = styled.label`
	color: ${mainTheme.SubColor};
	font-size: 16px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: 300ms ease all;

	&.shrink {
		${shrinkLabel};
	}
`;
