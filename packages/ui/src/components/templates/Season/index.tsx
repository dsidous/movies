import React from 'react';

import Episode from '../../molecules/Episode';
import PageTransition from '../../atoms/PageTransition';
import MiniHeader from '../../molecules/MiniHeader';
import useStyles from './styles';
import Skeleton from './skeleton';
import { Tv_Season } from '@typesRoots/tvseasons';

interface Props {
  loading: boolean;
  tvSeason: Tv_Season;
  tvId: string;
}

const Season: React.FC<Props> = ({
  loading,
  tvSeason: { name, air_date, episodes, poster_path },
  tvId,
}) => {
  const classes = useStyles();

  if (loading) {
    return <Skeleton />;
  }

  return (
    <PageTransition>
      <MiniHeader
        title={name}
        release_date={air_date}
        poster_path={poster_path}
        link={`/tv/${tvId}/seasons`}
        linkCopy='Back to seasons'
      />

      <ul className={classes.season__wrapper}>
        {episodes.map((episode) => (
          <li className={classes.season__element} key={episode.episode_number}>
            <Episode episode={episode} />
          </li>
        ))}
      </ul>
    </PageTransition>
  );
};

export default Season;
