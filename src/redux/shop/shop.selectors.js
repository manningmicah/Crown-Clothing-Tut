import { createSelector } from 'reselect';
import SHOP_DATA from 'data/shop.data';

const selectShop = (state) => state.shop;

export const selectCollections = createSelector([ selectShop ], (shop) => shop.collections);

export const selectCollectionsAsArray = createSelector([ selectCollections ], (collections) =>
	Object.keys(collections).map((key) => collections[key]),
);

export const selectCollection = (collectionUrlParam) => {
	if (SHOP_DATA[collectionUrlParam]) {
		return createSelector([ selectCollections ], (collections) => collections[collectionUrlParam]);
	} else {
		return createSelector([ selectCollections ], (collections) => collections['none']);
	}
};
