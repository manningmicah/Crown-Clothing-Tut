import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from 'data/firebase/firebase.utils';
import CartPreview from 'components/cart/cart-preview/cart-preview.component';

import CartIcon from 'components/cart/cart-icon/cart-icon.component';

import { ReactComponent as Logo } from 'assets/crownLogo.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
	<div className='header'>
		<Link id='homeLink' className='logo-container' to='/'>
			<Logo className='logo' />
		</Link>
		<nav className='options'>
			<Link id='shopLink' className='option' to='/shop'>
				SHOP
			</Link>
			<Link id='contactLink' className='option' to='/contact'>
				CONTACT
			</Link>
			{currentUser ? (
				<div id='signOutLink' className='option link' onClick={() => auth.signOut()} tabIndex='0'>
					SIGN OUT
				</div>
			) : (
				<Link id='signInLink' className='option' to='/signin'>
					SIGN IN
				</Link>
			)}
			<CartIcon />
		</nav>
		{hidden ? null : <CartPreview />}
	</div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden,
});

export default connect(mapStateToProps)(Header);
