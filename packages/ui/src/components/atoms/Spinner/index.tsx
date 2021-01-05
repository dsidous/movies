import React from 'react';

import useStyles from './styles';

const Spinner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
