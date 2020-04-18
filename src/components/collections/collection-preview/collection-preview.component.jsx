import React from 'react';
import { Link } from 'react-router-dom';

import CollectionItem from 'components/collections/collection-item/collection-item.component';

import { PreviewContainer, CollectionTitle, TitleEllipse, PreviewItems } from './collection-preview.styled';

const numOfItems = 4;

const CollectionPreview = ({ title, items }) => (
	<PreviewContainer>
		<Link title={`Go to ${title.toUpperCase()} Collection`} to={`shop/${title.toLowerCase()}`}>
			<CollectionTitle>
				<TitleEllipse aria-hidden>... </TitleEllipse>
				{title.toUpperCase()}
			</CollectionTitle>
		</Link>
		<PreviewItems>
			{items.filter((_item, idx) => idx < numOfItems).map((item) => <CollectionItem key={item.id} item={item} />)}
		</PreviewItems>
	</PreviewContainer>
);

export default CollectionPreview;
