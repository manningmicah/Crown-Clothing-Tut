import React from 'react';
import { connect } from 'react-redux';

import CustomButton from 'components/form/custom-button/custom-button.component';
import CartItem from 'components/cart/cart-item/cart-item.component';
import { selectCartItems } from 'redux/selectors/cart/cart.selector';

import './cart-preview.styles.scss';

const CartPreview = ({ cartItems }) => (
	<div className='cart-preview'>
		<div className='cart-items'>{cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)}</div>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = (state) => ({
	cartItems : selectCartItems(state),
});

export default connect(mapStateToProps)(CartPreview);
