import React from 'react';

import { propTypes } from './propTypes';
import Skeleton from './skeleton';
import Season from '../../molecules/Season';
import PageTransition from '../../atoms/PageTransition';
import MiniHeader from '../../molecules/MiniHeader';
import useStyles from './styles';

const Seasons = props => {
  const classes = useStyles();
  const { loading } = props;

  if (loading) {
    return <Skeleton />;
  }

  const {
    show: { seasons, name, first_air_date, id, poster_path },
  } = props;

  return (
    <PageTransition>
      <MiniHeader
        title={name}
        release_date={first_air_date}
        poster_path={poster_path}
        link={`/tv/${id}`}
        linkCopy="Back to main"
      />

      <ul className={classes.list}>
        {seasons
          .sort((a, b) => a.season_number - b.season_number)
          .map(season => (
            <li className={classes.item} key={season.season_number}>
              <Season season={season} tvId={id} />
            </li>
          ))}
      </ul>
    </PageTransition>
  );
};

Seasons.propTypes = propTypes;

export default Seasons;
