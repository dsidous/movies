import React, { useState, useEffect } from 'react';
import Vibrant from 'node-vibrant';

import PageTransition from '../../atoms/PageTransition/index';
import ShowProfile from '../../organisms/ShowProfile';
import Skeleton from './skeleton';
import useConfig from '../../hooks/useConfig';

import { Show } from '@typesRoots/show';

interface Props {
  loading: boolean;
  show: Show;
}

const Show: React.FC<Props> = ({ loading, show }) => {
  const { getImageURL } = useConfig();

  const [dcolor, setDcolor] = useState([0, 0, 0]);

  useEffect(() => {
    const getPalette = async () => {
      const { poster_path } = show;
      const path = getImageURL({
        filePath: poster_path,
        mediaType: 'poster',
        size: 0,
      });
      const palette = await Vibrant.from(path).getPalette();
      setDcolor(palette.DarkVibrant!.getRgb());
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
          <ShowProfile key={show.id} show={show} dcolor={dcolor} />
        )}
      </PageTransition>
    </div>
  );
};

export default Show;
