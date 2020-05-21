import React, { useContext } from 'react';
import { firebase } from '@movies/firebase';

import FirebaseAuthContext from '../../context/FirebaseAuthContext';
import { propTypes } from './propTypes';

import useStyles from './styles';

const WatchlistBookmark = ({ movie }) => {
  const classes = useStyles();
  const { authUser, user } = useContext(FirebaseAuthContext);
  const userRef = firebase.db.ref(`users/${user?.uid}`);

  const toggleMovie = () => {
    user.watchlist && user.watchlist[movie.id]
      ? userRef.child(`watchlist/${movie.id}`).remove()
      : userRef.child(`watchlist/${movie.id}`).update(movie);
  };

  const watchlist = user && user.watchlist && user.watchlist[movie.id];

  return (
    <div
      className={classes.root}
      onClick={() => toggleMovie()}
      onKeyDown={() => toggleMovie()}
      role="button"
      tabIndex="-1"
    >
      {authUser && (
        <span
          className={[
            classes.icon,
            'fa',
            watchlist !== undefined ? 'fa-bookmark' : 'fa-bookmark-o',
          ].join(' ')}
        />
      )}
    </div>
  );
};

WatchlistBookmark.propTypes = propTypes;

export default WatchlistBookmark;
