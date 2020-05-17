import React from 'react';
import { Link } from 'react-router-dom';

import { propTypes, defaultProps } from './propTypes';
import MediaImage from '../MediaImage';
import useStyles from './styles';

const Cast = ({ cast, type }) => {
  const classes = useStyles();
  const mediaType = type === 'full' ? 'miniProfile' : 'profile';

  return (
    <div className={`${classes.root} ${type}`}>
      <Link to={`/person/${cast.id}`}>
        <MediaImage
          mediaType={mediaType}
          size={1}
          filePath={cast.profile_path}
          name={cast.name}
        />
        <div className={classes.copy}>
          <strong>{cast.name}</strong>
          <br />
          <small>{cast.character}</small>
        </div>
      </Link>
    </div>
  );
};

Cast.propTypes = propTypes;
Cast.defaultProps = defaultProps;

export default Cast;
