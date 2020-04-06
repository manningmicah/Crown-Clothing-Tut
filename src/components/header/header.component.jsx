import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from 'data/firebase/firebase.utils';

import CartIcon from 'components/cart/cart-icon/cart-icon.component';

import { ReactComponent as Logo } from 'assets/crownLogo.svg';

import './header.styles.scss';

// TODO: Don't for get that you changed the signout from a div to a Link.
const Header = ({ currentUser }) => (
	<div className='header'>
		<Link className='logo-container' to='/'>
			<Logo className='logo' />
		</Link>
		<nav className='options'>
			<Link className='option' to='/shop'>
				SHOP
			</Link>
			<Link className='option' to='/contact'>
				CONTACT
			</Link>
			{currentUser ? (
				<div className='option link' onClick={() => auth.signOut()} tabIndex='0'>
					SIGN OUT
				</div>
			) : (
				<Link className='option' to='/signin'>
					SIGN IN
				</Link>
			)}
			<CartIcon />
		</nav>
	</div>
);

const mapStateToProps = (state) => ({
	currentUser : state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
