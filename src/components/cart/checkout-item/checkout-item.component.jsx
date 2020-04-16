import React from 'react';
import { connect } from 'react-redux';

import { removeItemKind, addItem, removeItem } from 'redux/cart/cart.actions';

import { CheckoutItemContainer, ImageCell, TextCell, QuantityCell, RemoveCell } from './checkout-item.styled';
import CustomButton from 'components/form/custom-button/custom-button.component';

const CheckoutItem = ({ cartItem, removeItemKind, addItem, removeItem }) => {
	const { imageUrl, name, quantity, price } = cartItem;
	return (
		<CheckoutItemContainer>
			<ImageCell>
				<img src={imageUrl} alt={name} />
			</ImageCell>
			<TextCell>{name}</TextCell>
			<QuantityCell>
				<div role='link' onClick={() => removeItem(cartItem)}>
					&#10094;
				</div>
				<span>{quantity}</span>
				<div role='link' onClick={() => addItem(cartItem)}>
					&#10095;
				</div>
			</QuantityCell>
			<TextCell>{price}</TextCell>
			<RemoveCell>
				<CustomButton inverted removeBtn onClick={() => removeItemKind(cartItem)}>
					&#10005;
				</CustomButton>
			</RemoveCell>
		</CheckoutItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem        : (item) => dispatch(addItem(item)),
	removeItem     : (item) => dispatch(removeItem(item)),
	removeItemKind : (item) => dispatch(removeItemKind(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
