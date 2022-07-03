import { createContext, useContext, useEffect, useState } from 'react';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { auth } from '../config/firebase';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	console.log(user, loading);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser({
					uid: user.uid,
					email: user.email,
				});
			} else {
				setUser(null);
			}
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	const signUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const logOut = async () => {
		setUser(null);
		await signOut(auth);
	};

	return (
		<AuthContext.Provider value={{ user, signUp, signIn, logOut }}>
			{loading ? null : children}
		</AuthContext.Provider>
	);
};
