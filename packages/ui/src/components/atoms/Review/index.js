import React from 'react';

import LongCopy from '../LongCopy';
import { propTypes } from './propTypes';
import useStyles from './styles';

const Review = ({ review: { id, author, content } }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} key={id}>
      <div className={classes.author}>{`A review by ${author}`}</div>
      <div className={classes.content}>
        <LongCopy content={content} />
      </div>
    </div>
  );
};

Review.propTypes = propTypes;

export default Review;
