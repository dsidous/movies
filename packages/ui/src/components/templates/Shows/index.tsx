import React, { useState } from 'react';

import Filter from '../../organisms/Filter';
import Result from '../../molecules/Result';
import PageTransition from '../../atoms/PageTransition';
import { Genres } from '@typesRoots/movie';

interface Props {
  media: string;
  resultMedia: string;
  genres: Genres[];
}

const Shows: React.FC<Props> = ({ media, resultMedia, genres }) => {
  const [query, queryUpdate] = useState('');

  return (
    <PageTransition>
      <Filter
        genres={genres}
        queryUpdate={queryUpdate}
        media={media}
        query={query}
      >
        <Result query={query} resultMedia={resultMedia} />
      </Filter>
    </PageTransition>
  );
};

export default Shows;
