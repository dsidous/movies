/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';

import { propTypes } from './propTypes';
import WatchlistBookmark from '../../atoms/WatchlistBookmark';
import Skeleton from './skeleton';

import useStyles from './styles';
import useConfig from '../../hooks/useConfig';

const MovieCard = ({ movie, media }) => {
  if (!movie) {
    return <Skeleton />;
  }

  const { getImageURL } = useConfig();
  const classes = useStyles();
  const theme = useTheme();

  const {
    id,
    title,
    overview,
    poster_path,
    backdrop_path,
    vote_average,
    release_date,
    name,
    first_air_date,
  } = movie;

  const mtitle = title || name;
  const date = release_date || first_air_date;
  const posterURL = getImageURL({
    filePath: poster_path,
    mediaType: 'poster',
    size: 1,
  });

  const backdropURL = getImageURL({
    filePath: backdrop_path,
    mediaType: 'backdrop',
    size: 1,
  });

  return (
    <li className={classes.root}>
      <Link to={`/${media}/${id}`}>
        <picture className={classes.poster}>
          <source
            media={`(min-width: ${theme.breakpoints.values.md}px)`}
            srcSet={posterURL}
          />
          <source
            media={`(max-width: ${theme.breakpoints.values.md}px)`}
            srcSet={backdropURL}
          />
          <img className={classes.poster} src={posterURL} alt={mtitle} />
        </picture>
      </Link>
      <div>
        <div className={classes.title}>{mtitle}</div>
        <div className={classes.rating}>{vote_average}</div>
      </div>
      <div>
        <div className={classes.year}>{date.slice(0, 4)}</div>
      </div>
      <div
        className={[classes.overview, overview.length > 200 ? 'long' : ''].join(
          ' ',
        )}
      >
        {overview.slice(0, overview.indexOf(' ', 200))}
      </div>
      <WatchlistBookmark movie={movie} />
    </li>
  );
};

MovieCard.propTypes = propTypes;

export default MovieCard;
