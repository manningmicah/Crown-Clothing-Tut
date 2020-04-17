import styled from 'styled-components';
import StripeCheckoutButton from 'components/cart/stripe-button/stripe-button.component';

export const CheckoutContainer = styled.div`
	width: 60%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;
`;

export const CheckoutTable = styled.table`width: 100%;`;

export const CheckoutTableHeader = styled.tr`
	width: 100%;
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid darkgrey;
`;

export const CheckoutHeaderName = styled.th`
	text-transform: capitalize;
	width: 20%;
`;

export const Total = styled.div`
	margin-top: 30px;
	margin-left: auto;
	font-size: 36px;
`;

export const CheckoutButton = styled(StripeCheckoutButton)`
  		margin-left: auto;
`;

export const PaymentWarning = styled.span`
	text-align: center;
	margin-top: 40px;
	font-size: 24px;
	color: red;
`;
