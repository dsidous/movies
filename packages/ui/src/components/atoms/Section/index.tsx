import React from 'react';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import SectionHeader from './header';

interface Props {
  noborder: boolean;
}

const StyledContainer: React.FC<Props> = ({ children, noborder, ...props }) => (
  <Container component="section" {...props}>
    <div className="sectionInner">{children}</div>
  </Container>
);

const Section = withStyles((theme) => ({
  root: {
    '& .sectionInner': {
      borderTop: props => (props.noborder ? 0 : theme.separator),
      margin: props => (props.noborder ? 0 : [[theme.spacing(5), 0, 'auto']]),
      paddingTop: theme.spacing(5),
    },
  },
}))(StyledContainer);


Section.Header = SectionHeader;

export default Section;
