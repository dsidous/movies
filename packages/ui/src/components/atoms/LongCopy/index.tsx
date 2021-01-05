/** @jsxFrag React.Fragment */
import React, { useState, useEffect } from 'react';
import { compiler } from 'markdown-to-jsx';

import { Button } from '@material-ui/core';

import useStyles from './styles';

interface Props {
  content: string;
  max?: number;
}

const LongCopy = ({ content, max = 500 }: Props) => {
  const classes = useStyles();
  const [state, setState] = useState({
    expanded: true,
    longCopy: content,
  });

  const toggleContent = () => {
    const longCopy = state.expanded
      ? `${content.slice(0, content.indexOf(' ', max))} ...`
      : content;

    setState({
      longCopy,
      expanded: !state.expanded,
    });
  };

  useEffect(() => {
    if (content.length > max) {
      toggleContent();
    }
  }, []);

  return (
    <>
      {compiler(state.longCopy)}
      {content.length > max && (
        <Button
          onClick={() => toggleContent()}
          size="small"
          variant="outlined"
          className={classes.toggle}
        >
          {state.expanded ? <span>Show Less</span> : <span>Show More</span>}
        </Button>
      )}
    </>
  );
};

export default LongCopy;
