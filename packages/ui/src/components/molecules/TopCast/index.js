import React from 'react';
import { Link } from 'react-router-dom';

import { propTypes, defaultProps } from './propTypes';
// import Cast from '../../atoms/Cast';

import useStyles from './styles';

const TopCast = ({ cast, fullLink }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.castWrapper}>
        {cast.map(person => (
          <div>{person}</div>
        ))}
      </div>

      <Link className={classes.fullCaCrBtn} to={fullLink}>
        Full Cast & Crew
      </Link>
    </div>
  );
};

TopCast.propTypes = propTypes;
TopCast.defaultProps = defaultProps;

export default TopCast;
