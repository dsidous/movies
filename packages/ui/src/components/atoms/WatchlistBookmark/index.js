import React, { useContext } from 'react';
import { firebase } from '@movies/firebase';

import FirebaseAuthContext from '../../context/FirebaseAuthContext';
import useSnackBars from '../../hooks/useSnackBars';
import { propTypes } from './propTypes';

import useStyles from './styles';

const WatchlistBookmark = ({ movie }) => {
  const classes = useStyles();
  const { authUser, user } = useContext(FirebaseAuthContext);
  const userRef = firebase.db.ref(`users/${user?.uid}`);
  const { addAlert } = useSnackBars();

  const toggleMovie = () => {
    if (user.watchlist && user.watchlist[movie.id]) {
      userRef.child(`watchlist/${movie.id}`).remove();
      addAlert(`${movie.title || movie.name} removed from your watchlist`);
    } else {
      userRef.child(`watchlist/${movie.id}`).update(movie);
      addAlert(`${movie.title || movie.name} added to your watchlist`);
    }
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
