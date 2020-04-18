import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from 'components/cart/cart-item/cart-item.component';
import { selectCartItems } from 'redux/cart/cart.selectors';
import emptyCartImage from '../../../assets/emptycart.png';
import { toggleCartHidden } from 'redux/cart/cart.actions';

import { CartPreviewContainer, EmptyMessage, CartItems, CheckoutButton } from './cart-preview.styled';

const emptyItem = {
	id       : 9999,
	name     : 'OH NO, You have nothing in your cart!',
	imageUrl : emptyCartImage,
	price    : '0',
	quantity : 0,
};

const CartPreview = ({ cartItems, history, dispatch }) => (
	<CartPreviewContainer>
		{cartItems.length ? (
			<CartItems>{cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)}</CartItems>
		) : (
			<EmptyMessage>
				<CartItem key={emptyItem.id} item={emptyItem} />
			</EmptyMessage>
		)}
		<CheckoutButton
			onClick={() => {
				history.push('/checkout');
				dispatch(toggleCartHidden());
			}}>
			GO TO CHECKOUT
		</CheckoutButton>
	</CartPreviewContainer>
);

const mapStateToProps = createStructuredSelector({
	cartItems : selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartPreview));
