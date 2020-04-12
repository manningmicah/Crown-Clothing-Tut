import React from 'react';
import { connect } from 'react-redux';

import './collection.styles.scss';
import CollectionItem from 'components/collections/collection-item/collection-item.component';
import { selectCollection } from 'redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => {
	console.log(collection);
	return (
		<div className='collection-page'>
			<h1>Collection Page</h1>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection : selectCollection(ownProps.match.params.collectionName)(state),
});

export default connect(mapStateToProps)(CollectionPage);
