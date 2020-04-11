import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from 'components/cart/checkout-item/checkout-item.component';
import { selectCartItems, selectCartTotal } from 'redux/cart/cart.selector';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
	<div className='checkout-page'>
		<h1>CHECK OUT</h1>
		<table summary='This table lists the items currently in your cart.'>
			<tr className='checkout-header'>
				<th className='header-block' scope='col'>
					Product
				</th>
				<th className='header-block' scope='col'>
					Description
				</th>
				<th className='header-block' scope='col'>
					Price
				</th>
				<th className='header-block' scope='col'>
					Quantity
				</th>
				<th className='header-block' scope='col'>
					Remove
				</th>
			</tr>
			{cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)}
			<div className='total'>
				<span>TOTAL: ${total}</span>
			</div>
		</table>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems : selectCartItems,
	total     : selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
