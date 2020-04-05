import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey            : 'AIzaSyAoE6p4WCbPJdsY2umlGMIjjhFNPvUwkYo',
	authDomain        : 'crown-db-e7c6c.firebaseapp.com',
	databaseURL       : 'https://crown-db-e7c6c.firebaseio.com',
	projectId         : 'crown-db-e7c6c',
	storageBucket     : 'crown-db-e7c6c.appspot.com',
	messagingSenderId : '689856677448',
	appId             : '1:689856677448:web:2b23c1e19c6697da7d7a7d',
	measurementId     : 'G-L3EWK7528L',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`user/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('Error: User not created successfully.', error.message);
		}
	}

	return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
