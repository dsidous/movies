import React from 'react';

import { Review } from '@atoms/index';
import { Review as IReview } from '@typesRoots/movie';

import useStyles from './styles';

interface Props {
  reviews: IReview[];
}

const Reviews: React.FC<Props> = ({ reviews }) => {
  const classes = useStyles();

  return (
    <div className={classes.list}>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
