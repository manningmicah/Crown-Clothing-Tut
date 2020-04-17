import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
	CheckoutContainer,
	CheckoutTable,
	CheckoutTableHeader,
	CheckoutHeaderName,
	Total,
	CheckoutButton,
	PaymentWarning,
} from './checkout.styled';
import CheckoutItem from 'components/cart/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from 'redux/cart/cart.selectors';

const CheckoutPage = ({ cartItems, total }) => (
	<CheckoutContainer>
		<h1>CHECK OUT</h1>
		<CheckoutTable summary='This table lists the items currently in your cart.'>
			<thead>
				<CheckoutTableHeader>
					<CheckoutHeaderName scope='col'>Product</CheckoutHeaderName>
					<CheckoutHeaderName scope='col'>Description</CheckoutHeaderName>
					<CheckoutHeaderName scope='col'>Quantity</CheckoutHeaderName>
					<CheckoutHeaderName scope='col'>Price</CheckoutHeaderName>
					<CheckoutHeaderName scope='col'>Remove</CheckoutHeaderName>
				</CheckoutTableHeader>
			</thead>
			<tbody>{cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}</tbody>
		</CheckoutTable>
		<Total>
			<span>TOTAL: ${total}</span>
		</Total>
		<PaymentWarning>
			*Please use the following test credit card for payment*
			<br />
			4242 4242 4242 4242 exp:01/25 cvv:123
		</PaymentWarning>
		<CheckoutButton price={total} />
	</CheckoutContainer>
);

const mapStateToProps = createStructuredSelector({
	cartItems : selectCartItems,
	total     : selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
