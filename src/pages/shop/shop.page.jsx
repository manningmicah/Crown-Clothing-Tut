import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { Title } from './shop.styled';

import { fetchCollectionStartAsync } from 'redux/shop/shop.actions';
import { selectIsCollectionFetching } from 'redux/shop/shop.selectors';
import CollectionsOverview from 'components/collections/collections-overview/collections-overview.component';
import CollectionPage from 'pages/collection/collection.page';
import WithSpinner from 'components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionStartAsync } = this.props;
		fetchCollectionStartAsync();
	}

	render() {
		const { match, isCollectionFetching } = this.props;
		return (
			<div className='shop-page'>
				<Title>Shop</Title>
				<Switch>
					<Route
						exact
						path={`${match.path}`}
						render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />}
					/>
					<Route
						path={`${match.path}/:collectionName`}
						render={(props) => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	isCollectionFetching : selectIsCollectionFetching,
});

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionStartAsync : () => dispatch(fetchCollectionStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
