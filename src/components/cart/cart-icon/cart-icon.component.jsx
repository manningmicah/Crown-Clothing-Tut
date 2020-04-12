import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from 'redux/cart/cart.actions';
import { selectCartItemsCount } from 'redux/cart/cart.selectors';

import { ReactComponent as ShoppinIcon } from 'assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemcount }) => (
	<div id='cartPreviewLink' className='cart-icon link' role='button' tabIndex='0' onClick={toggleCartHidden}>
		<ShoppinIcon className='shopping-icon' />
		<span className='item-count'>{itemcount}</span>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden : () => dispatch(toggleCartHidden()),
});

const mapStatetoProps = createStructuredSelector({
	itemcount : selectCartItemsCount,
});

export default connect(mapStatetoProps, mapDispatchToProps)(CartIcon);
