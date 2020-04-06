import { UserActionTypes } from 'redux/types/user.types';

const initialState = {
	currentUser : null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case UserActionTypes.SET_CURREENT_USER:
			return {
				...state,
				currentUser : action.payload,
			};
		default:
			return state;
	}
};

export default userReducer;
