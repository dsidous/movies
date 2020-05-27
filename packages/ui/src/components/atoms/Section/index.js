import React from 'react';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import SectionHeader from './header';

const StyledContainer = withStyles(theme => ({
  root: {
    '& .sectionInner': {
      borderTop: props => (props.noborder ? 0 : theme.separator),
      margin: props => (props.noborder ? 0 : [[theme.spacing(5), 0, 'auto']]),
      paddingTop: theme.spacing(5),
    },
  },
}))(Container);

const Section = ({ children, ...other }) => (
  <StyledContainer component="section" {...other}>
    <div className="sectionInner">{children}</div>
  </StyledContainer>
);

Section.Header = SectionHeader;

export default Section;
