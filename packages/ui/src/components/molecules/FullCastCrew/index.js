import React from 'react';

import { propTypes } from './propTypes';
import Cast from '../../atoms/Cast';
import useStyles from './styles';

const FullCastCrew = props => {
  const {
    movie: {
      credits: { crew, cast },
    },
  } = props;
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.col}>
          <h3>
            Cast
            <span>{` ${cast.length}`}</span>
          </h3>
          {cast.map(person => (
            <Cast cast={person} type="full" key={person.credit_id} />
          ))}
        </div>
        <div className={classes.col}>
          <h3>
            Crew
            <span>{` ${crew.length}`}</span>
          </h3>
          {crew.map(person => (
            <Cast cast={person} type="full" key={person.credit_id} />
          ))}
        </div>
      </div>
    </div>
  );
};

FullCastCrew.propTypes = propTypes;

export default FullCastCrew;
