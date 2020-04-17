import React from 'react';
import { withRouter } from 'react-router-dom';

import {
	DirectoryItemContainer,
	BackgroundImage,
	ContentBlock,
	ContentTitle,
	ContentSubTitle,
} from './directory-item.styled';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
	<DirectoryItemContainer
		className={size ? `${size}` : ''}
		role='button'
		tabindex='0'
		onClick={() => history.push(`${match.url}shop/${linkUrl}`)}>
		<BackgroundImage
			className='imgTrans'
			style={{
				backgroundImage : `url(${imageUrl})`,
			}}
		/>
		<ContentBlock className='contentOp'>
			<ContentTitle>{title.toUpperCase()}</ContentTitle>
			<ContentSubTitle>SHOP NOW</ContentSubTitle>
		</ContentBlock>
	</DirectoryItemContainer>
);

export default withRouter(MenuItem);
