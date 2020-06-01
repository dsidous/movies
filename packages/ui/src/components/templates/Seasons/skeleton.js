import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Container, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  header: {
    alignItems: 'center',
    borderBottom: theme.separatorBold,
    display: 'flex',
    padding: [[theme.spacing(4), 0]],
  },

  list: {
    padding: 0,
  },

  item: {
    borderBottom: theme.separator,
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(2),

    '& h6': {
      marginBottom: theme.spacing(2),
    },
  },
}));

export default () => {
  const classes = useStyles();
  return (
    <Container>
      <Container className={classes.header}>
        <Skeleton variant="rect" width={50} height={80} />
        <Container>
          <Skeleton width="30%" />
          <Skeleton width="20%" />
        </Container>
      </Container>
      <ul className={classes.list}>
        {Array.from(new Array(4)).map((_, index) => (
          <li className={classes.item} key={index}>
            <Skeleton variant="rect" width={300} height={200} />
            <Container>
              <Typography variant="h6">
                <Skeleton variant="text" width="30%" />
              </Typography>
              <Skeleton />
              <Skeleton />
              <Skeleton width="60%" />
            </Container>
          </li>
        ))}
      </ul>
    </Container>
  );
};
