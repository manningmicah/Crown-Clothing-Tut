import { TOGGLE_CART_HIDDEN } from 'redux/types/cart.types';

const initialState = { hidden: true };

export default (state = initialState, { type }) => {
	switch (type) {
		case TOGGLE_CART_HIDDEN:
			return { ...state, hidden: !state.hidden };

		default:
			return state;
	}
};
