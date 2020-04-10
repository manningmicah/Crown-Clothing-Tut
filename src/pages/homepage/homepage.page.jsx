import React from 'react';
import Directory from 'components/directory/directory.component';
import './homepage.styles.scss';

const HomePage = () => (
	<div>
		<h1>CROWN TRADEGOODS</h1>
		<div className='homepage'>
			<Directory />
		</div>
	</div>
);

export default HomePage;
