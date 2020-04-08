import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from 'redux/actions/cart.actions';

import { ReactComponent as ShoppinIcon } from 'assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemcount }) => (
	<div className='cart-icon link' role='button' tabIndex='0' onClick={toggleCartHidden}>
		<ShoppinIcon className='shopping-icon' />
		<span className='item-count'>{itemcount}</span>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden : () => dispatch(toggleCartHidden()),
});

const mapStatetoProps = ({ cart: { cartItems } }) => ({
	itemcount : cartItems.reduce((accum, cartItem) => accum + cartItem.quantity, 0),
});

export default connect(mapStatetoProps, mapDispatchToProps)(CartIcon);
