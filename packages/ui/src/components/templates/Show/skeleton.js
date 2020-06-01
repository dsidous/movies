import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  header: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  main: {
    display: 'flex',
    marginTop: '24px',
  },
  cast: {
    justifyContent: 'space-between',
    display: 'flex',
    marginTop: '24px',
    height: '96px',
    width: '100%',
  },
  castBox: {
    height: '50px',
    width: '40%',

    [theme.breakpoints.up('sm')]: {
      height: '100%',
      width: '20%',
    },
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <Container>
      <Skeleton
        variant="rect"
        width="100%"
        height={200}
        className={classes.header}
      />
      <Container className={classes.main}>
        <Skeleton variant="rect" width="100%" height={200} />
        <Container>
          <Typography variant="h1">
            <Skeleton />
          </Typography>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton width="70%" />
        </Container>
      </Container>
      <Container className={classes.cast}>
        <Skeleton variant="rect" className={classes.castBox} />
        <Skeleton variant="rect" className={classes.castBox} />
        <Skeleton variant="rect" className={classes.castBox} />
        <Skeleton variant="rect" className={classes.castBox} />
      </Container>
    </Container>
  );
};
