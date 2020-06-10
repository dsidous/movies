import React, { useState, useEffect } from 'react';
import * as Vibrant from 'node-vibrant';
import { useHistory } from 'react-router-dom';

import { propTypes } from './propTypes';
import PageTransition from '../../atoms/PageTransition/index';
import ShowProfile from '../../organisms/ShowProfile';
import Skeleton from './skeleton';
import useConfig from '../../hooks/useConfig';

const Show = ({ loading, show }) => {
  const history = useHistory();
  const { getImageURL } = useConfig();
  const media = show.name ? 'tv' : 'movie';

  const [dcolor, setDcolor] = useState([0, 0, 0]);

  const handleShowClick = showId => {
    history.push(`/${media}/${showId}`);
  };

  useEffect(() => {
    const getPalette = async () => {
      const { poster_path } = show;
      const path = getImageURL({
        filePath: poster_path,
        mediaType: 'poster',
        size: 0,
      });
      const palette = await Vibrant.from(path).getPalette();
      // eslint-disable-next-line no-underscore-dangle
      await setDcolor(palette.DarkVibrant._rgb);
    };

    if (!loading && show.poster_path !== null) {
      getPalette();
    }
  }, [loading, show]);

  return (
    <div>
      <PageTransition>
        {loading ? (
          <Skeleton />
        ) : (
          <ShowProfile
            key={show.id}
            show={show}
            dcolor={dcolor}
            handleShowClick={handleShowClick}
          />
        )}
      </PageTransition>
    </div>
  );
};

Show.propTypes = propTypes;

export default Show;
