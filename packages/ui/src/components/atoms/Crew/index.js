import React from 'react';

import { Box, Typography } from '@material-ui/core';

import { propTypes, defaultProps } from './propTypes';
import useStyles from './styles';

const Crew = ({ crew }) => {
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

Crew.propTypes = propTypes;
Crew.defaultProps = defaultProps;

export default Crew;
