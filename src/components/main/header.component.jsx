import React from 'react';
import { connect } from 'react-redux';
import { auth } from 'data/firebase/firebase.utils';

import CartIcon from 'components/cart/cart-icon/cart-icon.component';
import CartPreview from 'components/cart/cart-preview/cart-preview.component';
import { selectCartHidden } from 'redux/cart/cart.selectors';
import { selectCurrentUser } from 'redux/user/user.selectors';

import { ReactComponent as Logo } from 'assets/crownLogo.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styled.js';
import { createStructuredSelector } from 'reselect';

const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer id='homeLink' to='/'>
			<Logo className='logo' />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink id='shopLink' to='/shop'>
				SHOP
			</OptionLink>
			<OptionLink id='contactLink' to='/contact'>
				CONTACT
			</OptionLink>
			{currentUser ? (
				<OptionLink as='div' id='signOutLink' className='force-vf' onClick={() => auth.signOut()} tabIndex='0'>
					SIGN OUT
				</OptionLink>
			) : (
				<OptionLink id='signInLink' to='/signin'>
					SIGN IN
				</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{hidden ? null : <CartPreview />}
	</HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
	currentUser : selectCurrentUser,
	hidden      : selectCartHidden,
});

export default connect(mapStateToProps)(Header);
