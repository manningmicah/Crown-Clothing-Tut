import React from 'react';

import SHOP_DATA from 'data/shop.data';

import CollectionPreview from 'components/collections/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collections : SHOP_DATA,
		};
	}

	render() {
		const { collections } = this.state;
		return (
			<div className='shop-page'>
				<h1>Shop</h1>
				{collections.map(({ id, ...otherCollectionProps }) => <CollectionPreview key={id} {...otherCollectionProps} />)}
			</div>
		);
	}
}

export default ShopPage;
