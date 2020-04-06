import React from 'react';

import { ReactComponent as ShoppinIcon } from 'assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => (
	<div className='cart-icon link' role='button' tabIndex='0'>
		<ShoppinIcon className='shopping-icon' />
		<span className='item-count'>0</span>
	</div>
);

export default CartIcon;
