import { FETCH_COLLECTION_START, FETCH_COLLECTION_SUCCESS, FETCH_COLLECTION_FAILURE } from './shop.types';

const initialState = {
	collections  : null,
	isFetching   : false,
	errorMessage : undefined,
};

const shopReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_COLLECTION_START:
			return {
				...state,
				isFetching : true,
			};
		case FETCH_COLLECTION_SUCCESS:
			return {
				...state,
				isFetching  : false,
				collections : payload,
			};
		case FETCH_COLLECTION_FAILURE:
			return {
				...state,
				isFetching   : false,
				errorMessage : payload,
			};
		default:
			return state;
	}
};

export default shopReducer;
