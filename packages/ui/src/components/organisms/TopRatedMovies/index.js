import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { propTypes } from './propTypes';
import MediaImage from '../../atoms/MediaImage';
import useStyles from './styles';

const topGenres = [
  { id: -1, name: 'All' },
  { id: 28, name: 'Action' },
  { id: 35, name: 'Comedy' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 878, name: 'Science Fiction' },
  { id: 53, name: 'Thriller' },
];

const TopRatedMovies = ({ popular }) => {
  const classes = useStyles();
  const [active, setActive] = useState(-1);
  const [topMovies, setTopMovies] = useState(popular.slice(0, 5));

  const randomList = arrayMax => {
    const nbrArray = Array.from(Array(arrayMax), (_, x) => x);
    const rndList = [];
    // eslint-disable-next-line no-plusplus
    for (let n = 1; n <= 5; ++n) {
      const rndNum = Math.floor(Math.random() * (arrayMax - n) + 1);
      rndList.push(nbrArray[rndNum]);
      nbrArray[rndNum] = nbrArray[arrayMax - n];
    }
    return rndList;
  };

  const filterTopMovies = genre => {
    let movies =
      genre !== -1
        ? popular.filter(movie => movie.genre_ids.includes(genre))
        : popular;

    const moviesLength = movies.length;

    if (moviesLength > 5) {
      const rndList = randomList(moviesLength);
      movies = movies.filter((movie, index) => rndList.indexOf(index) !== -1);
    }

    setTopMovies(() => movies);
  };

  const selectGenre = topGenreId => {
    setActive(topGenreId);
    filterTopMovies(topGenreId);
  };

  const genresList = () =>
    topGenres.map(topGenre => (
      <li
        data-test={topGenre.id}
        key={topGenre.id}
        className={topGenre.id === active ? 'active' : ''}
      >
        <span
          onClick={() => selectGenre(topGenre.id)}
          onKeyDown={() => selectGenre(topGenre.id)}
          role="button"
          tabIndex="-1"
        >
          {topGenre.name}
        </span>
      </li>
    ));

  return (
    topMovies && (
      <section>
        <h3 className={classes.header}>Movies of the day</h3>
        <ul className={classes.menu}>{genresList()}</ul>
        <div className={classes.root}>
          {topMovies.map((movie, i) => (
            <Link
              to={`/movie/${movie.id}`}
              key={movie.id}
              className={[classes.item, i === 0 ? 'featured' : ''].join(' ')}
            >
              {movie.poster_path !== null && i === 0 && (
                <MediaImage
                  mediaType="poster"
                  size={5}
                  filePath={movie.poster_path}
                  name={movie.title}
                />
              )}
              {movie.backdrop_path !== null && i !== 0 && (
                <MediaImage
                  mediaType="poster"
                  size={5}
                  filePath={movie.backdrop_path}
                  name={movie.title}
                />
              )}
              <div className={classes.title}>{movie.title}</div>
            </Link>
          ))}
        </div>
      </section>
    )
  );
};

export default TopRatedMovies;

TopRatedMovies.propTypes = propTypes;
