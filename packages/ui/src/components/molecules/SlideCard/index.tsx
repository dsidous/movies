import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedDate } from 'react-intl';

import Typography from '@material-ui/core/Typography';

import MediaImage from '../../atoms/MediaImage';
import RatingBadge from '../../atoms/RatingBadge';
import useStyles from './styles';

const SlideCard = ({
  item: {
    __typename,
    id,
    title,
    name,
    poster_path,
    release_date,
    vote_average,
  },
}) => {
  const classes = useStyles();

  return (
    <Link to={`/${__typename}/${id}`} className={classes.root}>
      <figure className={classes.inner}>
        <RatingBadge value={vote_average}>
          <MediaImage
            mediaType="slider"
            size={2}
            filePath={poster_path}
            name={title || name}
          />
        </RatingBadge>
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
