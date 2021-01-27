import React from 'react';

import { Box, Typography } from '@material-ui/core';

import { propTypes, defaultProps } from './propTypes';
import useStyles from './styles';

import { Crew_Credit } from '../../../types/movie';

interface CrewProps {
  crew: Crew_Credit[];
}

const Crew: React.FC<CrewProps> = ({ crew }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {crew
        .filter(credit =>
          ['Director', 'Screenplay', 'Characters'].includes(credit.job),
        )
        .map(person => (
          <Box className={classes.item} key={person.credit_id}>
            <Typography variant="caption">
              <strong>{`${person.job}: `}</strong>
              {person.name}
            </Typography>
          </Box>
        ))}
    </Box>
  );
};

export default Crew;
