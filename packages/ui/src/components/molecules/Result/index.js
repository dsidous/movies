/* eslint-disable camelcase */
import React from 'react';
import { compose, branch } from 'recompose';
import { withMovies, withTvs, withConfig } from '@movies/common';

import { propTypes } from './propTypes';
import MovieCard from '../MovieCard';
import Spinner from '../../atoms/Spinner';

import useStyles from './styles';

const Result = ({
  shows,
  config: {
    images: { secure_base_url, poster_sizes },
  },
  resultMedia,
  loading,
  configLoading,
}) => {
  const classes = useStyles();
  const img_base_path = secure_base_url + poster_sizes[3];

  if (loading || configLoading) {
    return <Spinner />;
  }

  return (
    <ul className={classes.root}>
      {shows.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          img_base_path={img_base_path}
          media={resultMedia}
        />
      ))}
    </ul>
  );
};

Result.propTypes = propTypes;

const enhancedComponent = compose(
  branch(props => props.resultMedia === 'movie', withMovies(), withTvs()),
  withConfig(),
)(Result);

export default enhancedComponent;
