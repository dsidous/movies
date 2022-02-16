import React from 'react';

import Skeleton from '@material-ui/lab/Skeleton';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.infoRoot}>
        <div className={classes.poster}>
          <Skeleton variant="rect" height={300} />
        </div>
        <div className={classes.info}>
          <Typography variant="h2">
            <Skeleton variant="text" />
          </Typography>
          <Skeleton
            variant="text"
            width="20%"
            style={{ marginBottom: '24px' }}
          />
          <Typography variant="h6">
            <Skeleton
              variant="text"
              width="20%"
              style={{ marginBottom: '24px' }}
            />
          </Typography>
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" width="80%" />
        </div>
      </div>
    </div>
  );
};
