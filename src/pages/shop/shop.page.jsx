import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { Title } from './shop.styled';
import CollectionsOverview from 'components/collections/collections-overview/collections-overview.component';
import CollectionPage from 'pages/collection/collection.page';
import { firestore, collectionSnapshotToMap } from 'data/firebase/firebase.utils';
import { updateCollections } from 'redux/shop/shop.actions';
import WithSpinner from 'components/with-spinner/with-spinner.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
	state = {
		loading : true,
	};
	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection('collections');

		collectionRef.get().then((snapshot) => {
			const collectionsMap = collectionSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({ loading: false });
		});
	}

	render() {
		const { match } = this.props;
		const { loading } = this.state;
		return (
			<div className='shop-page'>
				<Title>Shop</Title>
				<Switch>
					<Route
						exact
						path={`${match.path}`}
						render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />}
					/>
					<Route
						path={`${match.path}/:collectionName`}
						render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}
					/>
				</Switch>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections : (collectionMap) => dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
