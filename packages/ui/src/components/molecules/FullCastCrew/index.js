import React from 'react';

import { propTypes } from './propTypes';
import Cast from '../../atoms/Cast';
import MediaImage from '../../atoms/MediaImage';
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
            <div key={person.credit_id} className={classes.item}>
              <MediaImage
                mediaType="miniProfile"
                filePath={person.profile_path}
                name={person.name}
              />
              <div className={classes.copy}>
                <strong>{person.name}</strong>
                <br />
                <small>{person.job}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

FullCastCrew.propTypes = propTypes;

export default FullCastCrew;
