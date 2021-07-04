import * as React from 'react';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@material-ui/core';

import { MediaImage } from '@atoms/index';
import { Cast_Crew_Credit } from '@typesRoots/movie';

import useStyles from './styles';

type Type = 'full' | 'top';

interface CastProps {
  cast: Cast_Crew_Credit;
  type: Type;
}

const Cast: React.FC<CastProps> = ({ cast, type }) => {
  const classes = useStyles();
  const mediaType = type === 'full' ? 'miniProfile' : 'profile';

  const getJobOrCharacter = () =>
    ('character' in cast && cast.character) || ('job' in cast && cast.job);

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
          <Typography variant='subtitle2'>{cast.name}</Typography>
          <Typography variant='caption'>{getJobOrCharacter()}</Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default Cast;
