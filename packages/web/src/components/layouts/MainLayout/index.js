import React from 'react';
import Container from '@material-ui/core/Container';
import { Footer } from '@movies/ui';

import { propTypes } from './propTypes';
import MainNavbar from '../../pages/MainNavbar';

const MainLayout = ({ children }) => (
  <>
    <MainNavbar />
    <Container component="section" maxWidth="lg">
      {children}
    </Container>
    <Footer />
  </>
);

MainLayout.propTypes = propTypes;

export default MainLayout;
