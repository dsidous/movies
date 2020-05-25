import React from 'react';
import Container from '@material-ui/core/Container';

import { propTypes } from './propTypes';
import MainNavbar from '../../pages/MainNavbar';

const FullLayout = ({ children }) => (
  <div>
    <MainNavbar />
    <Container component="section" disableGutters maxWidth={false}>
      {children}
    </Container>
  </div>
);

FullLayout.propTypes = propTypes;

export default FullLayout;
