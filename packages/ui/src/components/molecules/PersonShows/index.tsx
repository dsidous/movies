import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import { Box, Typography } from '@material-ui/core';

import { MediaImage } from '@atoms/index';
import useStyles from './styles';
import { Person_Credits } from '@typesRoots/person';

interface Props {
  shows: Person_Credits;
}

const PersonShows: React.FC<Props> = ({ shows: { cast } }) => {
  if (!cast.length) {
    return null;
  }

  const sortedShow = Array.from(new Set(cast)).sort((a, b) => {
    const dataB = b.release_date || b.first_air_date;
    const dataA = a.release_date || a.first_air_date;
    return dataB ? dataB.localeCompare(dataA) : -1;
  });

  const classes = useStyles();

  return (
    <>
      {sortedShow.map((show) => {
        const {
          id,
          poster_path,
          character,
          vote_average,
          media_type,
          title,
          name,
          release_date,
          first_air_date,
        } = show;

        const releaseDate = release_date || first_air_date;

        if (!(title || name) || releaseDate === undefined) {
          return null;
        }

        return (
          <Link to={`/${media_type}/${id}`} key={id} className={classes.root}>
            <p className={classes.poster}>
              <MediaImage
                mediaType='poster'
                size={1}
                filePath={poster_path}
                name={title || name}
              />
            </p>
            <Typography
              variant='body2'
              className={classes.title}
              component='div'
            >
              <Box fontWeight={700}>{title || name}</Box>
              {character && (
                <Typography variant='body2'>{` as ${character}`}</Typography>
              )}
            </Typography>
            {releaseDate !== '' && releaseDate !== undefined && (
              <Typography variant='body2' className={classes.release}>
                {releaseDate.substr(0, 4)}
              </Typography>
            )}
            {!!vote_average && (
              <Rating
                className={classes.rating}
                name='size-small'
                value={vote_average / 2}
                size='small'
                precision={0.5}
                readOnly
              />
            )}
          </Link>
        );
      })}
    </>
  );
};

export default PersonShows;
