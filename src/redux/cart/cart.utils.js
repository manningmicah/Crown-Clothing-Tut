export const addItemToCart = (cartItems, newItem) => {
	const existsInCart = cartItems.find((currentItem) => currentItem.id === newItem.id);

	if (existsInCart) {
		return cartItems.map(
			(currentItem) =>
				currentItem.id === newItem.id ? { ...currentItem, quantity: currentItem.quantity + 1 } : currentItem,
		);
	}
	return [ ...cartItems, { ...newItem, quantity: 1 } ];
};

export const removeItemFromCart = (cartItems, item) => {
	const existingItem = cartItems.find((currentItem) => currentItem.id === item.id);

	if (existingItem.quantity === 1) {
		return cartItems.filter((currentItem) => currentItem.id !== item.id);
	}

	return cartItems.map(
		(currentItem) =>
			currentItem.id === item.id ? { ...currentItem, quantity: currentItem.quantity - 1 } : currentItem,
	);
};
