import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import { MediaImage } from '@atoms/index';
import { Person_Credits, Person_Cast_Credit } from '@typesRoots/person';
import useStyles from './styles';

interface Props {
  combinedCredits: Person_Credits;
}

const PersonKnownFor: React.FC<Props> = ({ combinedCredits }) => {
  const classes = useStyles();
  const sorted = ([] as Person_Cast_Credit[])
    .concat(combinedCredits.cast)
    .sort((a, b) => b.vote_count - a.vote_count)
    .slice(0, 10);

  return (
    <>
      {sorted.map((movie: Person_Cast_Credit) => (
        <div key={movie.id} className={classes.root}>
          <Link to={`/${movie.media_type}/${movie.id}`}>
            <MediaImage
              mediaType='poster'
              size={3}
              filePath={movie.poster_path}
              name={movie.title || movie.name}
            />
            <Typography variant='caption'>
              {movie.title || movie.name}
            </Typography>
          </Link>
        </div>
      ))}
      ,
    </>
  );
};

export default PersonKnownFor;
