import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import { propTypes } from './propTypes';

import useStyles from './styles';

const IsDrawerWrapper = ({
  children,
  width,
  mobileOpen,
  handleDrawerToggle,
}) => {
  if (isWidthUp('md', width)) {
    return children;
  }

  const classes = useStyles();

  return (
    <Drawer
      variant="temporary"
      anchor="left"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      classes={{
        paper: classes.root,
      }}
      ModalProps={{
        keepMounted: true,
      }}
      onClick={handleDrawerToggle}
    >
      {children}
    </Drawer>
  );
};

export default withWidth()(IsDrawerWrapper);

IsDrawerWrapper.propTypes = propTypes;
