import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Title } from './shop.styled';
import CollectionsOverview from 'components/collections/collections-overview/collections-overview.component';
import CollectionPage from 'pages/collection/collection.page';

const ShopPage = ({ match }) => (
	<div className='shop-page'>
		<Title>Shop</Title>
		<Switch>
			<Route exact path={`${match.path}`} component={CollectionsOverview} />
			<Route path={`${match.path}/:collectionName`} component={CollectionPage} />
		</Switch>
	</div>
);

export default ShopPage;
