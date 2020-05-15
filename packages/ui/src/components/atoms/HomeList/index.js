import React from 'react';
import { Link } from 'react-router-dom';

import { propTypes } from './propTypes';
import MediaImage from '../MediaImage';
import useStyles from './styles';

const HomeList = ({ title, list }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>{title}</div>
      <ul className={classes.list}>
        {list.map(show => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <li className={classes.item} key={show.id}>
            <Link to={`/movie/${show.id}`}>
              <MediaImage
                mediaType="poster"
                size={0}
                filePath={show.poster_path}
                name={show.title}
              />
              <div className={classes.data}>
                <div className={classes.dataTitle}>
                  {`${show.title} (${show.vote_average})`}
                </div>
                <div className={classes.dataGenres}>
                  {show.genre_names.genre_name.map((genreName, i) =>
                    show.genre_names.length === i + 1
                      ? genreName
                      : `${genreName}, `,
                  )}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

HomeList.propTypes = propTypes;

export default HomeList;
