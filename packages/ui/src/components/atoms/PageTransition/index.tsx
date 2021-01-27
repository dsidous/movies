/** @jsxFrag React.Fragment */
import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import useStyles from './styles';

interface Props {
  children: React.ReactNode;
}

const PageTransition:React.FC<Props> = ({ children }) => {
  const classes = useStyles();

  const [loaded, setLoaded] = useState<boolean>(false);

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

export default PageTransition;
