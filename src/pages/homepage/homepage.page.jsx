import React from 'react';
import Directory from 'components/directory/directory.component';
import { HomePageContainer } from './homepage.styled';

const HomePage = () => (
	<div>
		<h1>CROWN TRADEGOODS PROJECT</h1>
		<HomePageContainer>
			<Directory />
		</HomePageContainer>
	</div>
);

export default HomePage;
