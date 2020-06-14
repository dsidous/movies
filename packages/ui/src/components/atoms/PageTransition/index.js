/** @jsxFrag React.Fragment */
import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import { propTypes } from './propTypes';
import useStyles from './styles';

const PageTransition = props => {
  const { children } = props;
  const [loaded, setLoaded] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <CSSTransition
      in={loaded}
      timeout={1000}
      classNames={{
        appear: classes.appear,
        appearActive: classes.appearActive,
        enter: classes.enter,
        enterActive: classes.enterActive,
      }}
    >
      <>{children}</>
    </CSSTransition>
  );
};

PageTransition.propTypes = propTypes;

export default PageTransition;
