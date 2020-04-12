import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from 'components/collections/collections-overview/collections-overview.component';
import CollectionPage from 'pages/collection/collection.page';

const ShopPage = ({ match }) => (
	<div className='shop-page'>
		<h1>Shop</h1>
		<Route exact path={`${match.path}`} component={CollectionsOverview} />
		<Route path={`${match.path}/:collectionName`} component={CollectionPage} />
	</div>
);

export default ShopPage;
