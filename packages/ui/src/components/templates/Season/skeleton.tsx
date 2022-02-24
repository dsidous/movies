import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Container, Typography } from '@material-ui/core';

import useStyles from './styles';

export default () => {
  const classes = useStyles();
  return (
    <Container>
      <Container className={classes.header}>
        <Skeleton variant='rect' width={50} height={80} />
        <Container>
          <Skeleton width='30%' />
          <Skeleton width='20%' />
        </Container>
      </Container>
      <ul className={classes.list}>
        {Array.from(new Array(4)).map((_, index) => (
          <li className={classes.item} key={index}>
            <Skeleton variant='rect' width={300} height={80} />
            <Container>
              <Typography variant='h6'>
                <Skeleton variant='text' width='30%' />
              </Typography>
              <Skeleton />
              <Skeleton />
              <Skeleton width='60%' />
            </Container>
          </li>
        ))}
      </ul>
    </Container>
  );
};
