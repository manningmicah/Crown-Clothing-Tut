import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './collections-overview.styles.scss';
import CollectionPreview from 'components/collections/collection-preview/collection-preview.component';
import { selectCollectionsAsArray } from 'redux/shop/shop.selectors';

const CollectionsOverview = ({ collections }) => (
	<div className='collections-overview'>
		{collections.map(({ id, ...otherCollectionProps }) => <CollectionPreview key={id} {...otherCollectionProps} />)}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections : selectCollectionsAsArray,
});

export default connect(mapStateToProps)(CollectionsOverview);
