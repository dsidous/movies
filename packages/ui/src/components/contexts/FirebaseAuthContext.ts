import { Show } from '@typesRoots/show';
import { createContext } from 'react';

interface UserInfo {
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string;
  uid: string;
}

interface User {
  username: string;
  email: string;
  passwordOne: string;
  passwordTwo: string;
  error: Error;
  watchlist: Show[];
}

interface FirebaseAuthContext {
  user: User | null;
  authUser: UserInfo | null;
}

const firebaseAuthContextDefaultValue = {
  user: null,
  authUser: null,
};

const FirebaseAuthContext = createContext<FirebaseAuthContext>(
  firebaseAuthContextDefaultValue
);

export default FirebaseAuthContext;
