import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndRegPage from './pages/Signin-and-Reg/Signin-and-Reg.component';
import { auth } from './data/firebase/firebase.utils';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser : null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route exact path='/shop' component={ShopPage} />
					<Route exact path='/signin' component={SignInAndRegPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
