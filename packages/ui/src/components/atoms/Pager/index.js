import React from 'react';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import useStyles from './styles';
import { propTypes } from './propTypes';

const MyPager = ({ page, handlePageSelect }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button onClick={() => handlePageSelect(page - 1)}>
        <KeyboardArrowLeft />
        Previous
      </Button>
      <Button onClick={() => handlePageSelect(page + 1)}>
        Next
        <KeyboardArrowRight />
      </Button>
    </div>
  );
};

MyPager.propTypes = propTypes;

export default MyPager;
