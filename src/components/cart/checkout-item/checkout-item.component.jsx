import React from 'react';
import { connect } from 'react-redux';

import { removeItemKind, addItem, removeItem } from 'redux/cart/cart.actions';

import './checkout-item.styles.scss';
import CustomButton from 'components/form/custom-button/custom-button.component';

const CheckoutItem = ({ cartItem, removeItemKind, addItem, removeItem }) => {
	const { imageUrl, name, quantity, price } = cartItem;
	return (
		<tr className='checkout-item'>
			<td className='image-container'>
				<img src={imageUrl} alt={name} />
			</td>
			<td className='name'>{name}</td>
			<td className='quantity'>
				<div>
					<div className='arrow' role='link' onClick={() => removeItem(cartItem)}>
						&#10094;
					</div>
					<span className='value'>{quantity}</span>
					<div className='arrow' role='link' onClick={() => addItem(cartItem)}>
						&#10095;
					</div>
				</div>
			</td>
			<td className='price'>{price}</td>
			<td className='remove'>
				<CustomButton inverted remove-btn onClick={() => removeItemKind(cartItem)}>
					&#10005;
				</CustomButton>
			</td>
		</tr>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem        : (item) => dispatch(addItem(item)),
	removeItem     : (item) => dispatch(removeItem(item)),
	removeItemKind : (item) => dispatch(removeItemKind(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
