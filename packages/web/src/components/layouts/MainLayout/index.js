import React from 'react';
import Container from '@material-ui/core/Container';

import { propTypes } from './propTypes';
import MainNavbar from '../../pages/MainNavbar';

const MainLayout = ({ children }) => (
  <div>
    <MainNavbar />
    <Container component="section" maxWidth="lg">
      {children}
    </Container>
  </div>
);

MainLayout.propTypes = propTypes;

export default MainLayout;
