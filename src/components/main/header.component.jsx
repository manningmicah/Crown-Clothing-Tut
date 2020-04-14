import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from 'data/firebase/firebase.utils';

import CartIcon from 'components/cart/cart-icon/cart-icon.component';
import CartPreview from 'components/cart/cart-preview/cart-preview.component';
import { selectCartHidden } from 'redux/cart/cart.selectors';
import { selectCurrentUser } from 'redux/user/user.selectors';

import { ReactComponent as Logo } from 'assets/crownLogo.svg';

import './header.styles.scss';
import { createStructuredSelector } from 'reselect';

const Header = ({ currentUser, hidden }) => {
	return (
		<div className='header'>
			<Link id='homeLink' className='logo-container' to='/'>
				<Logo className='logo' />
			</Link>
			<span className='welcomeMessage'>{`Welcome, ${currentUser.displayName.split(' ')[0]}`}</span>
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
};

const mapStateToProps = createStructuredSelector({
	currentUser : selectCurrentUser,
	hidden      : selectCartHidden,
});

export default connect(mapStateToProps)(Header);
