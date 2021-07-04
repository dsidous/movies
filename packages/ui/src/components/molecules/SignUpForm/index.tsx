import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth, db } from '@movies/firebase';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { blue, grey } from '@material-ui/core/colors';

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[800]),
    backgroundColor: blue[800],
    '&:hover': {
      backgroundColor: blue[900],
    },
  },
  disabled: {
    color: theme.palette.getContrastText(grey[300]),
    backgroundColor: grey[300],
  },
}))(Button);

type Error = { message: string } | null;

interface UserInfo {
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string;
  uid: string;
}

interface State {
  username: string;
  email: string;
  passwordOne: string;
  passwordTwo: string;
  error: Error;
}

const INITIAL_STATE: State = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (
  propertyName: string,
  value: string | Error,
  state: State
) => () => ({
  ...state,
  [propertyName]: value,
});

const SignUpForm = () => {
  const [state, setState] = useState<State>({ ...INITIAL_STATE });
  const history = useHistory();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const { username, email, passwordOne } = state;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser: UserInfo) => {
        db.doCreateUser(authUser.uid, username, email).then(() => {
          setState(() => ({ ...INITIAL_STATE }));
          history.push('/');
        });
      })
      .catch((error: Error) => setState(byPropKey('error', error, state)));

    event.preventDefault();
  };

  const { username, email, passwordOne, passwordTwo, error } = state;

  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    username === '';

  return (
    <form onSubmit={onSubmit}>
      <Typography align='center' variant='h6' style={{ margin: '28px 0 0' }}>
        OR
      </Typography>

      {error && error.message}
      <TextField
        id='username'
        label='Username'
        value={username}
        onChange={(event) =>
          setState(byPropKey('username', event.target.value, state))
        }
        margin='normal'
        variant='outlined'
        fullWidth
        required
      />

      <TextField
        id='email'
        type='email'
        label='Email address'
        placeholder='Enter email'
        value={email}
        onChange={(event) =>
          setState(byPropKey('email', event.target.value, state))
        }
        margin='normal'
        variant='outlined'
        fullWidth
        required
      />
      <TextField
        id='passwordOne'
        label='Password'
        type='password'
        value={passwordOne}
        onChange={(event) =>
          setState(byPropKey('passwordOne', event.target.value, state))
        }
        margin='normal'
        variant='outlined'
        fullWidth
        required
      />
      <TextField
        id='passwordTwo'
        label='Confirm password'
        type='password'
        value={passwordTwo}
        onChange={(event) =>
          setState(byPropKey('passwordTwo', event.target.value, state))
        }
        margin='normal'
        variant='outlined'
        fullWidth
        required
      />
      <ColorButton
        fullWidth
        type='submit'
        disabled={isInvalid}
        className='btn btn-primary btn-block'
      >
        Create account
      </ColorButton>
    </form>
  );
};

export default SignUpForm;

export const SignUpLink = () => (
  <p>
    Don&apos;t have an account?
    <Link to='/signup'>Sign Up</Link>
  </p>
);
