import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { propTypes } from './propTypes';
import TopPeopleProfile from '../../organisms/TopPeople';

const TopPeople = ({ toppeople }) => {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const actPage = parseInt(search.get('page'), 10) || 1;

  const history = useHistory();
  const [page, setPage] = useState(actPage);

  const handlePageSelect = e => {
    if (e > 0) {
      setPage(e);
      history.push(`/person?page=${e}`);
    }
  };

  return (
    <TopPeopleProfile
      page={page}
      toppeople={toppeople}
      handlePageSelect={handlePageSelect}
    />
  );
};

TopPeople.propTypes = propTypes;

export default TopPeople;
