import { useEffect, useState } from 'react';
import firebase from '@utils/Firebase/firebaseClient';

const formatAuthUser = (user) => ({
	uid: user.uid,
	email: user.email,
});

const useFirebaseAuth = () => {
	const [authUser, setAuthUser] = useState(null);
	const [loading, setLoading] = useState<boolean>(true);

	const authStateChanged = async (authState) => {
		if (!authState) {
			setLoading(false);
			return;
		}

		setLoading(true);

		let formattedUser = formatAuthUser(authState);

		setAuthUser(formattedUser);
		setLoading(false);
	};

	const clear = () => {
		setAuthUser(null);
		setLoading(true);
	};

	const signInWithEmailAndPassword = (email, password) =>
		firebase.auth().signInWithEmailAndPassword(email, password);

	const createUserWithEmailAndPassword = (email, password) =>
		firebase.auth().createUserWithEmailAndPassword(email, password);

	const signOut = () => firebase.auth().signOut().then(clear);

	useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged(authStateChanged);
		return () => unsubscribe();
	}, []);

	return {
		authUser,
		loading,
		signInWithEmailAndPassword,
		createUserWithEmailAndPassword,
		signOut,
	};
};

export default useFirebaseAuth;
