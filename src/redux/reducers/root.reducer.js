import { combineReducers } from 'redux';

import userReducer from 'redux/reducers/user/user.reducer';
import cartReducer from 'redux/reducers/cart/cart.reducer';

export default combineReducers({
	user : userReducer,
	cart : cartReducer,
});
