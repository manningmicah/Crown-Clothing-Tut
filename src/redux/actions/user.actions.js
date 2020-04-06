import { SET_CURRENT_USER } from 'redux/types/user.types';

export const setCurrentUser = (user) => ({
	type    : SET_CURRENT_USER,
	payload : user,
});
