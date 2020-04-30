import React from 'react';
import { ListItem, ItemDep, ItemVer } from './package-item.styled';

const PackageItem = ({ dependency, version }) => {
	return (
		<ListItem>
			<ItemDep>{dependency}</ItemDep>
			<ItemVer>{version}</ItemVer>
		</ListItem>
	);
};

export default PackageItem;
