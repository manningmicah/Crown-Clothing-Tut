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
