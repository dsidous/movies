/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import _ from 'lodash';
import React from 'react';

import { propTypes } from './propTypes';
import FirebaseAuthContext from '../../contexts/FirebaseAuthContext';
import MovieCard from '../../molecules/MovieCard';
import PageTransition from '../../atoms/PageTransition';

import useStyles from './styles';

const WatchList = () => {
  const classes = useStyles();

  return (
    <PageTransition>
      <FirebaseAuthContext.Consumer>
        {({ user, authUser }) => (
          <div className={classes.root}>
            {_.size(authUser && user?.watchlist) > 0 ? (
              <ul className={classes.list}>
                {_.map(user.watchlist, movie => {
                  const media =
                    movie.__typename === 'Tv_detailed' ||
                    movie.__typename === 'Tv'
                      ? 'tv'
                      : 'movie';
                  return (
                    <MovieCard key={movie.id} movie={movie} media={media} />
                  );
                })}
              </ul>
            ) : (
              authUser && (
                <div>No movie or tv show added to your watchlist yet.</div>
              )
            )}
            {!authUser && (
              <div>Please log in or register for manage your watchlist</div>
            )}
          </div>
        )}
      </FirebaseAuthContext.Consumer>
    </PageTransition>
  );
};

WatchList.propTypes = propTypes;

export default WatchList;
