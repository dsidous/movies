import React from 'react';
import { useHistory } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import { auth } from '@movies/firebase';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: blue[800],
    '&:hover': {
      backgroundColor: blue[900],
    },
  },
}))(Button);

const SignInFacebook = () => {
  const history = useHistory();

  const signInWithFB = () => {
    auth
      .doSignInWithFacebook()
      .then(() => history.push('/'))
      .catch((err: string) => console.log(err));
  };

  return (
    <ColorButton fullWidth type='submit' onClick={signInWithFB}>
      Log in with Facebook
    </ColorButton>
  );
};

export default SignInFacebook;
