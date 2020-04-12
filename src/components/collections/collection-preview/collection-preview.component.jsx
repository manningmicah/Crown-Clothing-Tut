import React from 'react';
import { Link } from 'react-router-dom';

import CollectionItem from 'components/collections/collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
	<div className='collection-preview'>
		<Link to={`shop/${title.toLowerCase()}`}>
			<h1 className='title'>
				<span className='collection-ellipse' aria-hidden>
					...{' '}
				</span>
				{title.toUpperCase()}
			</h1>
		</Link>
		<div className='preview'>
			{items.filter((_item, idx) => idx < 4).map((item) => <CollectionItem key={item.id} item={item} />)}
		</div>
	</div>
);

export default CollectionPreview;
