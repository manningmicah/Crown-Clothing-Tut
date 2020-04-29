import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector([ selectShop ], (shop) => shop.collections);

export const selectCollectionsAsArray = createSelector(
	[ selectCollections ],
	(collections) => (collections ? Object.keys(collections).map((key) => collections[key]) : []),
);

//TODO: updaet selector to use none entry in DB.
export const selectCollection = (collectionUrlParam) => {
	//	if (selectCollectionsAsArray[collectionUrlParam]) {
	return createSelector(
		[ selectCollections ],
		(collections) =>
			collections ? (collections[collectionUrlParam] ? collections[collectionUrlParam] : collections['none']) : null,
	);
	//	} else {
	//		return createSelector([ selectCollections ], (collections) => collections['none']);
	//	}
};
