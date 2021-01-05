import React from 'react';
import { Box, Typography, Paper } from '@material-ui/core';

import LongCopy from '../LongCopy';
import { propTypes } from './propTypes';
import useStyles from './styles';
import { Review as PropReview } from '../../../types/movie';

interface Props {
  review: PropReview;
}

const Review = ({ review: { author, content } }: Props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography
        className={classes.author}
      >{`A review by ${author}`}</Typography>
      <Box className={classes.content}>
        <LongCopy content={content} />
      </Box>
    </Paper>
  );
};

Review.propTypes = propTypes;

export default Review;
