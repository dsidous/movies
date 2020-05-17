import React, { useContext } from 'react';

import { propTypes } from './propTypes';
import {
  removeMovieFromWatchlist,
  addMovieToWatchlist,
  FirebaseAuthContext,
} from '../../hooks/FirebaseAuthProvider';
import useStyles from './styles';

const WatchlistBookmark = ({ movie }) => {
  const classes = useStyles();
  const { user } = useContext(FirebaseAuthContext);
  const toggleMovie = () => {
    user.watchlist && user.watchlist[movie.id]
      ? removeMovieFromWatchlist(movie.id)
      : addMovieToWatchlist(movie);
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
      {user.email && (
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
