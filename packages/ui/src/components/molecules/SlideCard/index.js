import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedDate } from 'react-intl';

import Typography from '@material-ui/core/Typography';

import MediaImage from '../../atoms/MediaImage';
import useStyles from './styles';

const SlideCard = ({ item }) => {
  const classes = useStyles();

  return (
    <Link to={`/movie/${item.id}`} className={classes.root}>
      <figure className={classes.inner}>
        <MediaImage
          mediaType="slider"
          size={2}
          filePath={item.poster_path}
          name={item.title || item.name}
        />
        <Typography component="figcaption" variant="caption">
          {item.title || item.name}
          {item.release_date && (
            <FormattedDate
              value={item.release_date}
              // year="numeric"
              // month="long"
              // day="2-digit"
            />
          )}
        </Typography>
      </figure>
    </Link>
    // <div key={item.id}  role="link" tabIndex="-1">
    //   <MediaImage
    //     mediaType="slider"
    //     size={2}
    //     filePath={item.poster_path}
    //     name={item.title || item.name}
    //   />
    //   <Typography variant="caption" component="">
    //     {item.title || item.name}
    //   </Typography>
    // </div>
  );
};

export default SlideCard;
