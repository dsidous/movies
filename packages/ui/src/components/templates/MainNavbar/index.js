/* eslint-disable camelcase */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import { propTypes } from './propTypes';
import { FirebaseAuthContext } from '../../hooks/FirebaseAuthProvider';
import NavSearch from '../../atoms/NavSearch';
import MainMenu from '../../atoms/MainMenu';
import UserMenuNotLoggedIn from '../../atoms/UserMenuNotLoggedIn';
import UserMenuLoggedIn from '../../atoms/UserMenuLoggedIn';
import IsDrawerWrapper from '../../atoms/IsDrawerWrapper';

import useStyles from './styles';

const MainNavbar = props => {
  const classes = useStyles();
  const { config } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const UserMenu = () => (
    <FirebaseAuthContext.Consumer>
      {({ user, authUser }) =>
        !authUser ? (
          <UserMenuNotLoggedIn classes={classes} />
        ) : (
          <UserMenuLoggedIn username={user.username} classes={classes} />
        )
      }
    </FirebaseAuthContext.Consumer>
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar color="primary" className={classes.root}>
      <Toolbar variant="dense">
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Link to="/" className={classes.logo}>
          <Typography variant="h6">Movie Search</Typography>
        </Link>
        <IsDrawerWrapper
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        >
          <MainMenu />
        </IsDrawerWrapper>
        <div style={{ flexGrow: 1 }} />
        <NavSearch config={config} />
        <UserMenu />
      </Toolbar>
    </AppBar>
  );
};

export default MainNavbar;

MainNavbar.propTypes = propTypes;
