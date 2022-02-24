import React from 'react';

import Spinner from '../../atoms/Spinner';
import FullCastCrew from '../../molecules/FullCastCrew';
import PageTransition from '../../atoms/PageTransition';
import MiniHeader from '../../molecules/MiniHeader';
import { Show } from '@typesRoots/show';

interface Props {
  loading: boolean;
  show: Show;
}

const CastCrew: React.FC<Props> = ({ show, loading }) => {
  if (loading) {
    return <Spinner />;
  }

  const { id, title, name, release_date, first_air_date, poster_path } = show;
  const media = name ? 'tv' : 'movie';

  return (
    <PageTransition>
      <MiniHeader
        title={title || name}
        release_date={release_date || first_air_date}
        poster_path={poster_path}
        link={`/${media}/${id}`}
        linkCopy='Back to main'
      />
      <FullCastCrew movie={show} />
    </PageTransition>
  );
};

export default CastCrew;
