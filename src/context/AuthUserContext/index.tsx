import { createContext, ReactNode, useContext } from 'react';
import useFirebaseAuth from '@hooks/useFirebaseAuth';

interface Props {
	children: ReactNode;
}

const AuthUserContext = createContext({
	authUser: null,
	loading: true,
	signInWithEmailAndPassword: async () => {},
	createUserWithEmailAndPassword: async () => {},
	signOut: async () => {},
});

const AuthUserProvider = ({ children }: Props) => {
	const auth = useFirebaseAuth();
	return (
		<AuthUserContext.Provider value={auth}>
			{children}
		</AuthUserContext.Provider>
	);
};

const useAuth = () => useContext(AuthUserContext);

export { AuthUserProvider, useAuth }
