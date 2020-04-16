import styled from 'styled-components';
import CustomButton from 'components/form/custom-button/custom-button.component';
import { mainTheme } from 'assets/color-palettes';

export const CartPreviewContainer = styled.div`
	position: absolute;
	width: 257px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid ${mainTheme.MainColor};
	background-color: ${mainTheme.MainBgColor};
	top: 90px;
	right: 60px;
	z-index: 5;
`;

export const EmptyMessage = styled.div`
	margin: 50px auto;

	.item-name {
		font-size: 20px;
	}
`;

export const CartItems = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow: scroll;
`;

export const CheckoutButton = styled(CustomButton)`
  margin-top: auto;
`;
