import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import TopPeopleProfile from '../../organisms/TopPeople';
import { Top_person } from '@typesRoots/toppeople';

interface Props {
  toppeople: Top_person[];
}

const TopPeople: React.FC<Props> = ({ toppeople }) => {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const actPage = parseInt(search.get('page') || '1', 10);

  const history = useHistory();
  const [page, setPage] = useState(actPage);

  const handlePageSelect = (e: number) => {
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

export default TopPeople;
