import styled, { css } from 'styled-components';

const card = css`
	background-color: #eee;
	width: 380px;
	display: flex;
	flex-direction: column;
	padding: 10px;
	margin: 5px;
	border: 2px solid black;
`;

export const AboutContainer = styled.div`
	align-content: center;
	width: 850px;
`;

export const CardContainer = styled.div`
	width: 850px;
	display: flex;
	justify-content: space-between;
	margin: 30px auto;
	align-content: center;
`;

export const Title = styled.h1`
	font-size: 38px;
	margin: 0 auto 30px;
	display: block;
	text-align: center;
`;

export const Blurb = styled.div`
	background-color: #eee;
	padding: 20px;
	margin: 5px;
	border: 2px solid black;
`;

export const AboutDev = styled.div`${card};`;

export const AboutProject = styled.div`${card};`;

export const SectionTitle = styled.h2`
	margin: 10px 0;
	text-align: center;
`;

export const ItemName = styled.h3`display: block;`;

export const ItemValue = styled.div`text-align: right;`;

export const DetailBlock = styled.p`
	padding: 10px;
	margin: 0;
`;
