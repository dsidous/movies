import React from 'react';
import Container from '@material-ui/core/Container';
import { Footer } from '@movies/ui';

import { propTypes } from './propTypes';
import MainNavbar from '../../pages/MainNavbar';

const FullLayout = ({ children }) => (
  <>
    <MainNavbar />
    <Container component="section" disableGutters maxWidth={false}>
      {children}
    </Container>
    <Footer />
  </>
);

FullLayout.propTypes = propTypes;

export default FullLayout;
