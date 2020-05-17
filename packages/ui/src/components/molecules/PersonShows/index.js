/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';

import { propTypes } from './propTypes';
import MediaImage from '../../atoms/MediaImage';
import useStyles from './styles';

const PersonShows = ({ shows: { cast } }) => {
  if (!cast.length) {
    return null;
  }

  const sortedShow = [].concat(cast).sort((a, b) => {
    const dataB = b.release_date || b.first_air_date;
    const dataA = a.release_date || a.first_air_date;
    return dataB ? dataB.localeCompare(dataA) : -1;
  });

  return sortedShow.map((show, i) => {
    const classes = useStyles();
    const { id, poster_path, character } = show;
    const showAttr = show.release_date
      ? { title: 'title', releaseDate: 'release_date', showType: 'movie' }
      : { title: 'name', releaseDate: 'first_air_date', showType: 'tv' };

    const title = show[showAttr.title];
    const releaseDate = show[showAttr.releaseDate] || '';
    const { showType } = showAttr;
    const key = `${title}${id}-${i}`;

    return (
      <Link to={`/${showType}/${id}`} key={key} className={classes.root}>
        <p className={classes.poster}>
          <MediaImage
            mediaType="poster"
            size={1}
            filePath={poster_path}
            name={title}
          />
        </p>
        <p className={classes.release}>
          {releaseDate !== '' && releaseDate !== undefined
            ? releaseDate.substr(0, 4)
            : ''}
        </p>
        <p className={classes.title}>
          {title}
          {character && (
            <span className={classes.character}>{` as ${character}`}</span>
          )}
        </p>
      </Link>
    );
  });
};

PersonShows.propTypes = propTypes;

export default PersonShows;
