import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from 'redux/actions/cart.actions';

import { ReactComponent as ShoppinIcon } from 'assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden }) => (
	<div className='cart-icon link' role='button' tabIndex='0' onClick={toggleCartHidden}>
		<ShoppinIcon className='shopping-icon' />
		<span className='item-count'>0</span>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden : () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
