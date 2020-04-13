import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from 'components/cart/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from 'redux/cart/cart.selectors';

import './checkout.styles.scss';
import StripeCheckoutButton from 'components/cart/stripe-button/stripe-button.component';

const CheckoutPage = ({ cartItems, total }) => (
	<div className='checkout-page'>
		<h1>CHECK OUT</h1>
		<table summary='This table lists the items currently in your cart.'>
			<thead>
				<tr className='checkout-header'>
					<th className='header-block' scope='col'>
						Product
					</th>
					<th className='header-block' scope='col'>
						Description
					</th>
					<th className='header-block' scope='col'>
						Quantity
					</th>
					<th className='header-block' scope='col'>
						Price
					</th>
					<th className='header-block' scope='col'>
						Remove
					</th>
				</tr>
			</thead>
			<tbody>{cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}</tbody>
		</table>
		<div className='total'>
			<span>TOTAL: ${total}</span>
		</div>
		<div className='payment-warning'>
			*Please use the following test credit card for payment*
			<br />
			4242 4242 4242 4242 exp:01/25 cvv:123
		</div>
		<StripeCheckoutButton price={total} />
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems : selectCartItems,
	total     : selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
