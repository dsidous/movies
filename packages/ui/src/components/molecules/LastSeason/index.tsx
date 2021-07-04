import React from 'react';
import { Link } from 'react-router-dom';

import { Season as ISeason } from '@typesRoots/tv';

import Season from '../Season';
import useStyles from './styles';

interface Props {
  tvId: number;
  season: ISeason;
}

const LastSeason: React.FC<Props> = ({ tvId, season }) => {
  const classes = useStyles();
  return (
    <div>
      <Season season={season} tvId={tvId} />
      <Link to={`/tv/${tvId}/seasons`} className={classes.allBtn}>
        View All Seasons
      </Link>
    </div>
  );
};

export default LastSeason;
