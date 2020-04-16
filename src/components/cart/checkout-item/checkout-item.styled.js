import styled, { css } from 'styled-components';

const sharedCss = css`
	width: 20%;
	text-align: center;
`;

export const CheckoutItemContainer = styled.tr`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`;

export const ImageCell = styled.td`
	${sharedCss};
	padding-right: 7px;
	padding-left: 7px;

	img {
		width: 100%;
		height: 100%;
	}
`;

export const TextCell = styled.td`${sharedCss};`;

export const QuantityCell = styled.td`
	${sharedCss};
	display: flex;

	span {
		margin: 0 10px;
	}
	div {
		cursor: pointer;
		margin: auto;
	}
`;

export const RemoveCell = styled.td`
	min-width: 50px;
	margin: auto;
	cursor: pointer;
`;
