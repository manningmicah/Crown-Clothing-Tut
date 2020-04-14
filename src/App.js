import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';

import HomePage from 'pages/homepage/homepage.page';
import ShopPage from 'pages/shop/shop.page';
import Header from 'components/main/header.component';
import SignInAndRegPage from 'pages/Signin-and-Reg/Signin-and-Reg.page';
import CheckoutPage from 'pages/checkout/checkout.page';
import ErrorPage from 'pages/errors/error.page';
import { auth, createUserProfileDocument } from 'data/firebase/firebase.utils';
import { setCurrentUser } from 'redux/user/user.actions';
import { selectCurrentUser } from 'redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapshot) => {
					setCurrentUser({
						id : snapshot.id,
						...snapshot.data(),
					});
				});
			}
			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		const createdAt = new Date().getTime();
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route
						exact
						path='/signin'
						render={() => (this.props.currentUser ? <Redirect to='/' /> : <SignInAndRegPage />)}
					/>
					<Route exact path='/checkout' component={CheckoutPage} />
					<Route render={() => <ErrorPage type='404 - Page not Found' timeStamp={createdAt} />} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser : selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser : (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
