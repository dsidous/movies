import React from 'react';

import Skeleton from './skeleton';
import Season from '../../molecules/Season';
import PageTransition from '../../atoms/PageTransition';
import MiniHeader from '../../molecules/MiniHeader';
import useStyles from './styles';
import { Show } from '@typesRoots/show';

interface Props {
  loading: boolean;
  show: Show;
}

const Seasons: React.FC<Props> = ({
  loading,
  show: { seasons, name, first_air_date, id, poster_path },
}) => {
  const classes = useStyles();

  if (loading) {
    return <Skeleton />;
  }

  return (
    <PageTransition>
      <MiniHeader
        title={name}
        release_date={first_air_date}
        poster_path={poster_path}
        link={`/tv/${id}`}
        linkCopy='Back to main'
      />

      <ul className={classes.list}>
        {seasons
          .sort((a, b) => a.season_number - b.season_number)
          .map((season) => (
            <li className={classes.item} key={season.season_number}>
              <Season season={season} tvId={id} />
            </li>
          ))}
      </ul>
    </PageTransition>
  );
};

export default Seasons;
