import React from 'react';
import PkgItem from 'components/package/package-item.component';
import { PkgListContainer } from './package-list.styled';

const PackageList = ({ depList, listName }) => {
	const list = Object.entries(depList);
	// here we are using index as key since the items are static, have no ids, and never get sorted or filtered.
	return (
		<PkgListContainer>
			<h4>{listName}</h4>
			<ul>{list.map(([ key, value ], index) => <PkgItem key={index} dependency={key} version={value} />)}</ul>
		</PkgListContainer>
	);
};

export default PackageList;
