import React from 'react';
import { Box, Typography } from '@material-ui/core';

import { propTypes } from './propTypes';
import Cast from '../../atoms/Cast';
import useStyles from './styles';

import { Movie_detailed } from '../../../types/movie';

interface Props {
  movie: Movie_detailed;
}

const FullCastCrew = ({
  movie: {
    credits: { crew, cast },
  },
}: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.col}>
        <Typography variant="h6">
          <Box fontWeight={700} my={2}>
            Cast
            <span>{` ${cast.length}`}</span>
          </Box>
        </Typography>
        {cast.map(person => (
          <Cast cast={person} type="full" key={person.cast_id} />
        ))}
      </div>
      <div className={classes.col}>
        <Typography variant="h6">
          <Box fontWeight={700} my={2}>
            Crew
            <span>{` ${crew.length}`}</span>
          </Box>
        </Typography>
        {crew.map(person => (
          <Cast cast={person} type="full" key={person.credit_id} />
        ))}
      </div>
    </div>
  );
};

FullCastCrew.propTypes = propTypes;

export default FullCastCrew;
