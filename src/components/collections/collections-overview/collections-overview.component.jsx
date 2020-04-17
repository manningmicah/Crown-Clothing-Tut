import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { OverviewContainer } from './collections-overview.styled';
import CollectionPreview from 'components/collections/collection-preview/collection-preview.component';
import { selectCollectionsAsArray } from 'redux/shop/shop.selectors';

const CollectionsOverview = ({ collections }) => (
	<OverviewContainer>
		{collections
			.filter((collections) => collections.id !== 404)
			.map(({ id, ...otherCollectionProps }) => <CollectionPreview key={id} {...otherCollectionProps} />)}
	</OverviewContainer>
);

const mapStateToProps = createStructuredSelector({
	collections : selectCollectionsAsArray,
});

export default connect(mapStateToProps)(CollectionsOverview);
