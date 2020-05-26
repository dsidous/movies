import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedDate } from 'react-intl';

import Typography from '@material-ui/core/Typography';

import MediaImage from '../../atoms/MediaImage';
import useStyles from './styles';

const SlideCard = ({
  item: { id, title, name, poster_path, release_date },
}) => {
  const classes = useStyles();

  return (
    <Link to={`/movie/${id}`} className={classes.root}>
      <figure className={classes.inner}>
        <MediaImage
          mediaType="slider"
          size={2}
          filePath={poster_path}
          name={title || name}
        />
        <Typography component="figcaption" variant="caption">
          {title || name}
          <FormattedDate
            value={release_date}
            year="numeric"
            month="long"
            day="2-digit"
          />
        </Typography>
      </figure>
    </Link>
  );
};

export default SlideCard;
