/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';

import { propTypes } from './propTypes';
import NoImage from '../../../images/noimage.jpg';
import NoBdImage from '../../../images/nobdimage.jpg';
import WatchlistBookmark from '../../atoms/WatchlistBookmark';

import useStyles from './styles';

const MovieCard = ({ img_base_path, movie, media }) => {
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
  const imagePath =
    poster_path !== null
      ? [img_base_path + poster_path, img_base_path + backdrop_path]
      : [NoImage, NoBdImage];
  const classes = useStyles();
  const theme = useTheme();

  return (
    <li className={classes.root}>
      <Link to={`/${media}/${id}`}>
        <picture className={classes.poster}>
          <source
            media={`(min-width: ${theme.breakpoints.values.md}px)`}
            srcSet={imagePath[0]}
          />
          <source
            media={`(max-width: ${theme.breakpoints.values.md}px)`}
            srcSet={imagePath[1]}
          />
          <img className={classes.poster} src={imagePath[0]} alt={mtitle} />
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
