import React from 'react';
import { connect } from 'react-redux';
import { addItem } from 'redux/cart/cart.actions';

import {
	ItemContainer,
	ImageContainer,
	AddToCartButton,
	ItemFooter,
	ItemName,
	ItemPrice,
} from './collection-item.styled';

const CollectionItem = ({ item, addItem }) => {
	const { id, name, price, imageUrl } = item;
	return (
		<ItemContainer
			id={id}
			className='force-vf'
			role='link'
			tabindex='0'
			title={`Add ${name} to Cart`}
			onClick={() => addItem(item)}>
			<ImageContainer
				role='img'
				className='image'
				style={{
					backgroundImage : `url(${imageUrl})`,
				}}
			/>
			<ItemFooter>
				<ItemName>{name}</ItemName>
				<ItemPrice>{price}</ItemPrice>
			</ItemFooter>
			<AddToCartButton title={`Add ${name} to Cart`} inverted>
				Add to Cart
			</AddToCartButton>
		</ItemContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem : (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
