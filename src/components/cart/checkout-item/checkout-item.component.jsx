import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { imageUrl, name, quantity, price } }) => (
	<tr className='checkout-item'>
		<td className='image-container'>
			<img src={imageUrl} alt={name} />
		</td>
		<td className='name'>{name}</td>
		<td className='quantity'>{quantity}</td>
		<td className='price'>{price}</td>
		<td className='remove'>&#10005;</td>
	</tr>
);

export default CheckoutItem;
