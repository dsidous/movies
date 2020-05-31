/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import { compose, branch } from 'recompose';
import { withMovies, withTvs, withConfig } from '@movies/common';

import { propTypes } from './propTypes';
import MovieCard from '../MovieCard';

import useStyles from './styles';

const Result = ({ shows, config, resultMedia, loading, configLoading }) => {
  const classes = useStyles();
  const img_base_path =
    config?.images?.secure_base_url + config?.images?.poster_sizes[3];

  return (
    <ul className={classes.root}>
      {(loading || configLoading ? Array.from(new Array(6)) : shows).map(
        (movie, index) => (
          <Fragment key={movie?.id || index}>
            {movie ? (
              <MovieCard
                movie={movie}
                img_base_path={img_base_path}
                media={resultMedia}
              />
            ) : (
              <MovieCard />
            )}
          </Fragment>
        ),
      )}
    </ul>
  );
};

Result.propTypes = propTypes;

const enhancedComponent = compose(
  branch(props => props.resultMedia === 'movie', withMovies(), withTvs()),
  withConfig(),
)(Result);

export default enhancedComponent;
