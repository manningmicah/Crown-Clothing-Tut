import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from 'redux/cart/cart.actions';
import { selectCartItemsCount } from 'redux/cart/cart.selectors';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styled';

const CartIcon = ({ toggleCartHidden, itemcount }) => (
	<CartIconContainer id='cartPreviewLink' className='force-vf' role='button' tabIndex='0' onClick={toggleCartHidden}>
		<ShoppingIcon />
		<ItemCount>{itemcount}</ItemCount>
	</CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden : () => dispatch(toggleCartHidden()),
});

const mapStatetoProps = createStructuredSelector({
	itemcount : selectCartItemsCount,
});

export default connect(mapStatetoProps, mapDispatchToProps)(CartIcon);
