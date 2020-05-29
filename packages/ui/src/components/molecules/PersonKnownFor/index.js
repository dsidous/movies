import React from 'react';
import { Link } from 'react-router-dom';

import MediaImage from '../../atoms/MediaImage';
import useStyles from './styles';

const PersonKnownFor = ({ combinedCredits }) => {
  const classes = useStyles();
  const sorted = []
    .concat(combinedCredits.cast)
    .sort((a, b) => b.vote_count - a.vote_count)
    .slice(0, 8);

  return sorted.map(movie => (
    <div key={movie.id} className={classes.root}>
      <Link to={`/${movie.media_type}/${movie.id}`}>
        <MediaImage
          mediaType="poster"
          size={3}
          filePath={movie.poster_path}
          name={movie.title || movie.name}
        />
      </Link>
      <p className={classes.title}>{movie.title || movie.name}</p>
    </div>
  ));
};

export default PersonKnownFor;
