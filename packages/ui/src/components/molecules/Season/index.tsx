import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

import { MediaImage } from '@atoms/index';
import useStyles from './styles';
import { Season } from '@typesRoots/tv';

interface Props {
  season: Season;
  tvId: number;
}

const Season: React.FC<Props> = ({
  season: {
    poster_path,
    overview,
    name,
    episode_count,
    air_date,
    season_number,
  },
  tvId,
}) => {
  const classes = useStyles();

  const date = air_date !== null ? air_date.slice(0, 4) : '';
  const link = `/tv/${tvId}/season/${season_number}`;

  return (
    <div className={classes.root}>
      <Link to={link} className={classes.poster}>
        <MediaImage
          mediaType='poster'
          size={3}
          filePath={poster_path}
          name={name}
        />
      </Link>
      <div className={classes.details}>
        <Typography variant='h6'>{name}</Typography>
        <Typography
          paragraph
        >{`${date} | ${episode_count} episodes`}</Typography>
        <Typography variant='body2'>{overview}</Typography>
      </div>
    </div>
  );
};

export default Season;
