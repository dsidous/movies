import React from 'react';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import useStyles from './styles';

interface Props {
  page: number;
  handlePageSelect: (arg0: number) => void;
}

const MyPager:React.FC<Props> = ({ page, handlePageSelect }) => {
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

export default MyPager;
