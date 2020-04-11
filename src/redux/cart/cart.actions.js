import { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM, REMOVE_ITEM_KIND, CLEAR_CART } from 'redux/cart/cart.types';

export const toggleCartHidden = () => ({
	type : TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
	type    : ADD_ITEM,
	payload : item,
});

export const removeItem = (item) => ({
	type    : REMOVE_ITEM,
	payload : item,
});

export const removeItemKind = (item) => ({
	type    : REMOVE_ITEM_KIND,
	payload : item,
});

export const clearCart = () => ({
	type : CLEAR_CART,
});
