import styled from 'styled-components';
import { mainTheme } from 'assets/color-palettes';

export const DirectoryItemContainer = styled.div`
	min-width: 30%;
	height: 240px;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid ${mainTheme.MainColor};
	margin: 0 7.5px 15px;
	overflow: hidden;

	&:hover,
	&:focus {
		cursor: pointer;

		& .imgTrans {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}

		& .contentOp {
			opacity: 0.9;
		}
	}

	&.large {
		height: 380px;
	}

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}
`;

export const BackgroundImage = styled.div`
	width: 100%;
	height: 100%;
	background-position: center;
	background-size: cover;
`;

export const ContentBlock = styled.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 2px solid ${mainTheme.MainColor};
	background-color: ${mainTheme.MainBgColor};
	opacity: 0.7;
	position: absolute;
`;

export const ContentTitle = styled.h2`
	font-weight: bold;
	margin-bottom: 6px;
	font-size: 22px;
	color: #4a4a4a;
`;

export const ContentSubTitle = styled.span`
	font-weight: lighter;
	font-size: 16px;
`;
