import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';

import useStyles from './styles';

export default () => {
  const classes = useStyles();
  return (
    <li className={classes.root} style={{ minHeight: '230px' }}>
      <Link to=".">
        <Skeleton
          className={classes.poster}
          variant="rect"
          style={{ backgroundColor: '#999' }}
        />
      </Link>
      <div>
        <Skeleton width="70%" />
      </div>
      <div>
        <Skeleton width={2} />
      </div>
      <div>
        <Skeleton width="90%" />
        <Skeleton width="90%" />
      </div>
    </li>
  );
};
