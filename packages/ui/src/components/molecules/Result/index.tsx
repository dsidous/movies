import React, { Fragment } from 'react';
import { compose, branch } from 'recompose';
import { withMovies, withTvs } from '@movies/common';

import MovieCard from '../MovieCard/';

import useStyles from './styles';
import { Show } from '@typesRoots/show';

interface Props {
  shows: Show[];
  resultMedia: string;
  loading: boolean;
}

interface InProps {
  resultMedia: string;
  query: string;
}

const Result: React.FC<Props & InProps> = ({ shows, resultMedia, loading }) => {
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

const enhancedComponent = compose<Props, InProps>(
  branch<Props>(
    ({ resultMedia }) => resultMedia === 'movie',
    withMovies(),
    withTvs()
  )
)(Result);

export default enhancedComponent;
