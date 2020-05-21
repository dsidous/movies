import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { firebase, db as dba } from '@movies/firebase';

import FirebaseAuthContext from '../context/FirebaseAuthContext';

const FirebaseAuthProvider = ({ children }) => {
  const [state, setState] = useState({ authUser: false });

  useEffect(() => {
    firebase.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        setState(s => ({ ...s, authUser: true }));
        const User = firebase.db.ref(`users/${authUser.uid}`);
        User.once('value', snapshot => {
          if (snapshot.val() === null) {
            dba.doCreateUser(
              authUser.uid,
              authUser.displayName,
              authUser.email,
            );
          }
        }).then(
          User.on('value', snapshot => {
            return setState(s => ({
              ...s,
              user: { ...snapshot.val(), uid: authUser.uid },
            }));
          }),
        );
      } else {
        setState({ authUser: false });
      }
    });
  }, []);

  const { authUser, user } = state;
  return (
    <FirebaseAuthContext.Provider value={{ user, authUser }}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};

FirebaseAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FirebaseAuthProvider;
