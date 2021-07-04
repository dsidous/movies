import React from 'react';
import { Box, Typography } from '@material-ui/core';

import { Cast } from '@atoms/index';
import { Movie_detailed } from '@typesRoots/movie';
import useStyles from './styles';

interface Props {
  movie: Movie_detailed;
}

const FullCastCrew: React.FC<Props> = ({
  movie: {
    credits: { crew, cast },
  },
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.col}>
        <Typography variant='h6'>
          <Box fontWeight={700} my={2}>
            Cast
            <span>{` ${cast.length}`}</span>
          </Box>
        </Typography>
        {cast.map((person) => (
          <Cast cast={person} type='full' key={person.cast_id} />
        ))}
      </div>
      <div className={classes.col}>
        <Typography variant='h6'>
          <Box fontWeight={700} my={2}>
            Crew
            <span>{` ${crew.length}`}</span>
          </Box>
        </Typography>
        {crew.map((person) => (
          <Cast cast={person} type='full' key={person.credit_id} />
        ))}
      </div>
    </div>
  );
};

export default FullCastCrew;
