import React from 'react';
import Directory from 'components/directory/directory.component';
import { HomePageContainer } from './homepage.styled';

const HomePage = () => (
	<div>
		<h1>CROWN TRADEGOODS</h1>
		<HomePageContainer>
			<Directory />
		</HomePageContainer>
	</div>
);

export default HomePage;
