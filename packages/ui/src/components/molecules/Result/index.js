import React, { Fragment } from 'react';
import { compose, branch } from 'recompose';
import { withMovies, withTvs } from '@movies/common';

import { propTypes } from './propTypes';
import MovieCard from '../MovieCard';

import useStyles from './styles';

const Result = ({ shows, resultMedia, loading }) => {
  const classes = useStyles();

  return (
    <ul className={classes.root}>
      {(loading ? Array.from(new Array(6)) : shows).map((movie, index) => (
        <Fragment key={movie?.id || index}>
          {movie ? (
            <MovieCard movie={movie} media={resultMedia} />
          ) : (
            <MovieCard />
          )}
        </Fragment>
      ))}
    </ul>
  );
};

Result.propTypes = propTypes;

const enhancedComponent = compose(
  branch(props => props.resultMedia === 'movie', withMovies(), withTvs()),
)(Result);

export default enhancedComponent;
