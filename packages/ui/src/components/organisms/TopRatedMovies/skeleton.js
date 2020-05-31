import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

import useStyles from './styles';

export default () => {
  const classes = useStyles();
  return (
    <section>
      <Skeleton className={classes.header} />
      <div className={classes.root}>
        <Skeleton
          className={`${classes.item} featured`}
          variant="rect"
          height={410}
        />
        <Skeleton className={classes.item} variant="rect" height={200} />
        <Skeleton className={classes.item} variant="rect" height={200} />
        <Skeleton className={classes.item} variant="rect" height={200} />
        <Skeleton className={classes.item} variant="rect" height={200} />
      </div>
    </section>
  );
};
