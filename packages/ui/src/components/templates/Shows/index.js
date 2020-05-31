import React, { useState } from 'react';

import { propTypes } from './propTypes';
import Filter from '../../organisms/Filter';
import Result from '../../molecules/Result';
import PageTransition from '../../atoms/PageTransition';

const Shows = ({ media, resultMedia, genres }) => {
  const [query, queryUpdate] = useState('');

  return (
    <PageTransition>
      <Filter genres={genres} queryUpdate={queryUpdate} media={media}>
        <Result query={query} resultMedia={resultMedia} />
      </Filter>
    </PageTransition>
  );
};

Shows.propTypes = propTypes;

export default Shows;
