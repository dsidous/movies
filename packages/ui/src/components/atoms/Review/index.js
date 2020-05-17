import React from 'react';
import { compiler } from 'markdown-to-jsx';

import { propTypes } from './propTypes';
import useStyles from './styles';

const Review = ({ review: { id, author, content } }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} key={id}>
      <input type="checkbox" className={classes.more} id={id} />
      <div className={classes.author}>{`A review by ${author}`}</div>
      <div
        className={[classes.content, content.length > 500 ? 'long' : ''].join(
          ' ',
        )}
      >
        {compiler(content.slice(0, content.indexOf(' ', 500)), {
          forceInline: true,
        })}
        <span className={classes.hidden}>
          {compiler(content.slice(content.indexOf(' ', 500)), {
            forceInline: true,
          })}
        </span>
      </div>
      {content.length > 500 && (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label htmlFor={id} />
      )}
    </div>
  );
};

Review.propTypes = propTypes;

export default Review;
