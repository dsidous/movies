import React from 'react';
import { Link } from 'react-router-dom';

import { propTypes } from './propTypes';
import Season from '../Season';
import useStyles from './styles';

const LastSeason = ({ tvId, season }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Season season={season} tvId={tvId} />
      <Link to={`/tv/${tvId}/seasons`} className={classes.allBtn}>
        View All Seasons
      </Link>
    </div>
  );
};

LastSeason.propTypes = propTypes;

export default LastSeason;
