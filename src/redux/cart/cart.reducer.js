import { TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM, REMOVE_ITEM_KIND, CLEAR_CART } from 'redux/cart/cart.types';
import { addItemToCart, removeItemFromCart } from 'redux/cart/cart.utils';

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
				cartItems : removeItemFromCart(state.cartItems, payload),
				//placeholder
			};

		case REMOVE_ITEM_KIND:
			return {
				...state,
				cartItems : state.cartItems.filter((cartItem) => cartItem.id !== payload.id),
			};

		case CLEAR_CART:
			return {
				state,
			};

		default:
			return state;
	}
};
