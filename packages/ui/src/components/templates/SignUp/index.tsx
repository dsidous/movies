import React from 'react';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import SignInFacebook from '../../molecules/SignInFacebook';
import SignUpForm from '../../molecules/SignUpForm';

import useStyles from './styles';

const SignUpPage: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='sm'>
      <Paper className={classes.paper}>
        <Typography variant='h4'>Sign up</Typography>
        <Typography paragraph variant='body2'>
          To save your watchlist - all free.
        </Typography>
        <SignInFacebook />
        <SignUpForm />
      </Paper>
    </Container>
  );
};

export default SignUpPage;
