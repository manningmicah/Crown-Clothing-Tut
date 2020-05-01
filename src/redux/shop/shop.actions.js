import { FETCH_COLLECTION_START, FETCH_COLLECTION_SUCCESS, FETCH_COLLECTION_FAILURE } from './shop.types';
import { firestore, collectionSnapshotToMap } from 'data/firebase/firebase.utils';

export const fetchCollectionStart = () => ({
	type : FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = (collectionsMap) => ({
	type    : FETCH_COLLECTION_SUCCESS,
	payload : collectionsMap,
});

export const fetchCollectionFailure = (errorMessage) => ({
	type    : FETCH_COLLECTION_FAILURE,
	payload : errorMessage,
});

export const fetchCollectionStartAsync = () => {
	return (dispatch) => {
		const collectionRef = firestore.collection('collections');
		dispatch(fetchCollectionStart());

		collectionRef
			.get()
			.then((snapshot) => {
				const collectionsMap = collectionSnapshotToMap(snapshot);
				dispatch(fetchCollectionSuccess(collectionsMap));
			})
			.catch((error) => dispatch(fetchCollectionFailure(error.message)));
	};
};
