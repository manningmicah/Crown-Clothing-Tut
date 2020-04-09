import { SET_CURRENT_USER } from 'redux/user/user.types';

export const setCurrentUser = (user) => ({
	type    : SET_CURRENT_USER,
	payload : user,
});
