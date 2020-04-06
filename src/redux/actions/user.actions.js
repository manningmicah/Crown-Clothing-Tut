import { UserActionTypes } from 'redux/types/user.types';

export const setCurrentUser = (user) => ({
	type    : UserActionTypes.SET_CURREENT_USER,
	payload : user,
});
