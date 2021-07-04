import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

import { WatchlistBookmark } from '@atoms/index';
import useConfig from '@hooks/useConfig';
import Skeleton from './skeleton';
import useStyles from './styles';
import { Show } from '@typesRoots/show';

interface Props {
  movie?: Show;
  media?: string;
}

const MovieCard: React.FC<Props> = ({ movie, media }) => {
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
      <Box display='flex' justifyContent='space-between' alignItems='flex-end'>
        <Typography variant='h5' className={classes.title}>
          {mtitle}
        </Typography>
        <Typography className={classes.rating}>{vote_average}</Typography>
      </Box>
      <Typography variant='subtitle1' className={classes.year}>
        {date.slice(0, 4)}
      </Typography>
      <Typography
        variant='body2'
        className={[classes.overview, overview.length > 200 ? 'long' : ''].join(
          ' '
        )}
      >
        {overview.slice(0, overview.indexOf(' ', 200))}
      </Typography>
      <WatchlistBookmark movie={movie} />
    </li>
  );
};

export default MovieCard;
