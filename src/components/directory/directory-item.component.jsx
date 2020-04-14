import React from 'react';
import './directory-item.styles.scss';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
	<div
		className={`${size} menu-item`}
		role='button'
		tabindex='0'
		onClick={() => history.push(`${match.url}shop/${linkUrl}`)}
	>
		<div
			className='background-image'
			style={{
				backgroundImage : `url(${imageUrl})`,
			}}
		/>
		<div className='content'>
			<h2 className='title'>{title.toUpperCase()}</h2>
			<span className='subtitle'>SHOP NOW</span>
		</div>
	</div>
);

export default withRouter(MenuItem);
