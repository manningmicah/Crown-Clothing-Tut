import React from 'react';

import CustomButton from 'components/form/custom-button/custom-button.component';

import './cart-preview.styles.scss';

const CartPreview = () => (
	<div className='cart-preview'>
		<div className='cart-items' />
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
);

export default CartPreview;
