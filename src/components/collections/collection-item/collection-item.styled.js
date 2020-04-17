import styled from 'styled-components';
import CustomButton from 'components/form/custom-button/custom-button.component';

export const ItemContainer = styled.div`
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;
	cursor: pointer;

	&:hover,
	&:focus {
		.image {
			opacity: 0.8;
		}

		button {
			opacity: 0.8;
			display: flex;

			&:hover,
			&:focus {
				opacity: 0.8;
				display: flex;
			}
		}
	}
`;

export const ImageContainer = styled.div`
	width: 100%;
	height: 90%;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
`;

export const AddToCartButton = styled(CustomButton)`
		width: 80%;
		opacity: 0.7;
		position: absolute;
		top: 255px;
		display: none;
`;

export const ItemFooter = styled.div`
	width: 90%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

export const ItemName = styled.span`
	width: 87%;
	margin-bottom: 15px;
`;

export const ItemPrice = styled.span`width: 13%;`;
