import React from 'react';
import { propTypes, defaultProps } from './propTypes';

import useStyles from './styles';

const Crew = ({ crew }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {crew.map((cr, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className={classes.item} key={`${cr.name}-${i}`}>
          <small>
            <strong>{`${cr.job}: `}</strong>
          </small>
          <small>{cr.name}</small>
        </div>
      ))}
    </div>
  );
};

Crew.propTypes = propTypes;
Crew.defaultProps = defaultProps;

export default Crew;
