import { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from 'redux/cart/cart.types';
import { addItemToCart } from 'redux/cart/cart.utils';

const initialState = { hidden: true, cartItems: [] };

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case TOGGLE_CART_HIDDEN:
			return { ...state, hidden: !state.hidden };

		case ADD_ITEM:
			return {
				...state,
				cartItems : addItemToCart(state.cartItems, payload),
			};

		case REMOVE_ITEM:
			return {
				...state,
				cartItems : [ ...state.cartItems.pop(payload) ], //placeholder
			};

		case CLEAR_CART:
			return {
				...state,
				cartItems : [],
			};
		default:
			return state;
	}
};
