import React from 'react';
import Container from '@material-ui/core/Container';

import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();

  return (
    <Container component="section" className={classes.root} maxWidth={false}>
      <Container>&copy; 2020 tamasjonas.com All Rights Reserved</Container>
    </Container>
  );
};

export default Footer;
