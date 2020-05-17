import React from 'react';

import { propTypes, defaultProps } from './propTypes';
import Cast from '../../atoms/Cast';

import useStyles from './styles';

const TopCast = ({ cast, handleFullCrewClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h4>Top Billed Cast</h4>
      <div className={classes.castWrapper}>
        {cast.map(person => (
          <Cast cast={person} type="top" key={person.id} />
        ))}
      </div>

      <button
        type="button"
        className={classes.fullCaCrBtn}
        onClick={handleFullCrewClick}
      >
        Full Cast & Crew
      </button>
    </div>
  );
};

TopCast.propTypes = propTypes;
TopCast.defaultProps = defaultProps;

export default TopCast;
