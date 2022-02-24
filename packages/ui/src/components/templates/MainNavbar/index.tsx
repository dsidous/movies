import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import { Container } from '@material-ui/core';
import FirebaseAuthContext from '../../contexts/FirebaseAuthContext';
import NavSearch from '../../atoms/NavSearch';
import MainMenu from '../../atoms/MainMenu';
import UserMenuNotLoggedIn from '../../atoms/UserMenuNotLoggedIn';
import UserMenuLoggedIn from '../../atoms/UserMenuLoggedIn';
import IsDrawerWrapper from '../../atoms/IsDrawerWrapper';

import useStyles from './styles';

const MainNavbar: React.FC = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const UserMenu = () => (
    <FirebaseAuthContext.Consumer>
      {({ user, authUser }) =>
        !authUser || !user ? (
          <UserMenuNotLoggedIn />
        ) : (
          <UserMenuLoggedIn username={user.username} />
        )
      }
    </FirebaseAuthContext.Consumer>
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar color='primary' className={classes.root}>
      <Container maxWidth='lg'>
        <Toolbar variant='dense' disableGutters>
          <IconButton
            color='inherit'
            aria-label='Open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Link to='/' className={classes.logo}>
            <Typography variant='h6'>Movie Search</Typography>
          </Link>
          <IsDrawerWrapper
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          >
            <MainMenu />
          </IsDrawerWrapper>
          <div style={{ flexGrow: 1 }} />
          <NavSearch />
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MainNavbar;
