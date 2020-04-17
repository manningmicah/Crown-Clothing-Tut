import React from 'react';
import { connect } from 'react-redux';

import { CollectionContainer, Title, ItemsContainer, Item } from './collection.styled';
import { selectCollection } from 'redux/shop/shop.selectors';

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<CollectionContainer>
			<Title>{title}</Title>
			<ItemsContainer>{items.map((item) => <Item key={item.id} item={item} />)}</ItemsContainer>
		</CollectionContainer>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection : selectCollection(ownProps.match.params.collectionName)(state),
});

export default connect(mapStateToProps)(CollectionPage);
