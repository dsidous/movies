import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import useStyles from './styles';

const UserMenuNotLoggedIn = () => {
  const classes = useStyles();
  return (
    <MenuList className={classes.root}>
      <MenuItem>
        <Link to="/login" className={classes.item}>
          <Typography variant="body2">Login</Typography>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/signup" className={classes.item}>
          <Typography variant="body2">Sign up</Typography>
        </Link>
      </MenuItem>
    </MenuList>
  );
};

export default UserMenuNotLoggedIn;
