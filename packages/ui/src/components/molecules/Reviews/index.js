import React from 'react';

import { propTypes } from './propTypes';
import Review from '../../atoms/Review';

import useStyles from './styles';

const Reviews = ({ reviews }) => {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      {reviews.map(review => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

Reviews.propTypes = propTypes;

export default Reviews;
