/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import _ from 'lodash';
import React from 'react';

import { propTypes } from './propTypes';
import FirebaseAuthContext from '../../context/FirebaseAuthContext';
import MovieCard from '../../molecules/MovieCard';
import Spinner from '../../atoms/Spinner';
import PageTransition from '../../atoms/PageTransition';

import useStyles from './styles';

const WatchList = props => {
  const { configLoading } = props;
  const classes = useStyles();

  if (configLoading) {
    return <Spinner />;
  }

  const { config } = props;
  const img_base_path =
    config.images.secure_base_url + config.images.poster_sizes[2];

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
                    <MovieCard
                      key={movie.id}
                      movie={movie}
                      img_base_path={img_base_path}
                      media={media}
                    />
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
