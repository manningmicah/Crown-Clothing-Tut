import React from 'react';
import { CartItemContainer, CartItemImg, CartItemDetail, CartItemName } from './cart-item.styled';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<CartItemContainer>
		<CartItemImg src={imageUrl} alt={name} />
		<CartItemDetail>
			<CartItemName>{name}</CartItemName>
			<span>{quantity ? `${quantity} x $${price}` : ''}</span>
		</CartItemDetail>
	</CartItemContainer>
);

export default CartItem;
