import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from 'components/form/custom-button/custom-button.component';
import CartItem from 'components/cart/cart-item/cart-item.component';
import { selectCartItems } from 'redux/cart/cart.selector';
import emptyCartImage from '../../../assets/emptycart.png';

import './cart-preview.styles.scss';

const emptyItem = {
	id       : 9999,
	name     : 'OH NO, You have nothing in your cart!',
	imageUrl : emptyCartImage,
	price    : '0',
	quantity : 0,
};

const CartPreview = ({ cartItems, history }) => (
	<div className='cart-preview'>
		{cartItems.length ? (
			<div className='cart-items'>{cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)}</div>
		) : (
			<div className='empty-message'>
				<CartItem key={emptyItem.id} item={emptyItem} />
			</div>
		)}
		<CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = createStructuredSelector({
	cartItems : selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartPreview));
