import { createContext } from 'react';

const FirebaseAuthContext = createContext({
  authUser: false,
});

export default FirebaseAuthContext;
