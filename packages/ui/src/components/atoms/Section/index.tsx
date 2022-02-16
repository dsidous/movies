import React from 'react';
import { Container } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import SectionHeader from './header';

interface Props {
  noborder?: boolean;
  disableGutters?: boolean;
}

interface Composition {
  Header: React.FC;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sectionInner: {
      borderTop: (props: Props) => (props.noborder ? 0 : theme.separator),
      margin: (props: Props) =>
        props.noborder ? 0 : `${theme.spacing(5)} 0 auto`,
      paddingTop: theme.spacing(5),
    },
  })
);

const Section: React.FC<Props> & Composition = ({
  children,
  noborder,
  ...styleProps
}) => {
  const classes = useStyles(styleProps);

  return (
    <Container component='section' {...styleProps}>
      <div className={classes.sectionInner}>{children}</div>
    </Container>
  );
};

Section.Header = SectionHeader;

export default Section;
