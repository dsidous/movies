import React from 'react';

import { propTypes } from './propTypes';
import Episode from '../../molecules/Episode';
import PageTransition from '../../atoms/PageTransition';
import MiniHeader from '../../molecules/MiniHeader';
import useStyles from './styles';
import Skeleton from './skeleton';

const Season = props => {
  const classes = useStyles();
  const { loading } = props;

  if (loading) {
    return <Skeleton />;
  }

  const {
    tvSeason: { name, air_date, episodes, poster_path },
    tvId,
  } = props;

  return (
    <PageTransition>
      <MiniHeader
        title={name}
        release_date={air_date}
        poster_path={poster_path}
        link={`/tv/${tvId}/seasons`}
        linkCopy="Back to seasons"
      />

      <ul className={classes.season__wrapper}>
        {episodes.map(episode => (
          <li className={classes.season__element} key={episode.episode_number}>
            <Episode episode={episode} />
          </li>
        ))}
      </ul>
    </PageTransition>
  );
};

Season.propTypes = propTypes;

export default Season;
