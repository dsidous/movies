import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@material-ui/core';

import MediaImage from '../MediaImage';
import { propTypes, defaultProps } from './propTypes';
import useStyles from './styles';

const Cast = ({ cast, type }) => {
  const classes = useStyles();
  const mediaType = type === 'full' ? 'miniProfile' : 'profile';

  return (
    <Box className={`${classes.root} ${type}`}>
      <Link to={`/person/${cast.id}`}>
        <MediaImage
          mediaType={mediaType}
          size={1}
          filePath={cast.profile_path}
          name={cast.name}
        />
        <Box className={classes.copy} py={1}>
          <Typography variant="subtitle2">{cast.name}</Typography>
          <Typography variant="caption">
            {cast.character || cast.job}
          </Typography>
        </Box>
      </Link>
    </Box>
  );
};

Cast.propTypes = propTypes;
Cast.defaultProps = defaultProps;

export default Cast;
