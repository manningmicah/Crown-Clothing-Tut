import React from 'react';
import PackageList from 'components/package/package-list.component';
import Pkg from '../../../package.json';
import { PkgInfoContainer, ItemName, ItemValue } from './package-info.styled';

const PackageInfo = () => {
	const dependencies = Pkg.dependencies;
	const devDependencies = Pkg.devDependencies;

	return (
		<PkgInfoContainer>
			<ItemName>Package Name</ItemName>
			<ItemValue>{Pkg.name}</ItemValue>
			<ItemName>Package Version</ItemName>
			<ItemValue>{Pkg.version}</ItemValue>
			<ItemName>Package List</ItemName>
			<PackageList depList={dependencies} listName='Dependencies' />
			<PackageList depList={devDependencies} listName='Development Dependencies' />
		</PkgInfoContainer>
	);
};

export default PackageInfo;
// depList.foreach( (dependency) =>
// {Object.entries(dependency).forEach(([ key, value ]) => {
// 	return <PkgItem dependency={key} version={value} />;
// })});
