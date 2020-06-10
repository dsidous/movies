import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';

import { propTypes } from './propTypes';
import MediaImage from '../../atoms/MediaImage';
import useStyles from './styles';

const MiniHeader = ({ title, release_date, poster_path, link, linkCopy }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.inner}>
        <MediaImage
          mediaType="poster"
          size={1}
          filePath={poster_path}
          name={title}
        />
        <Box className={classes.info}>
          <Typography component="div">
            <Box fontWeight={700}>
              {title}
              &nbsp;
              {release_date && <span>({release_date.slice(0, 4)})</span>}
            </Box>
          </Typography>
          <Typography variant="body2">
            <Link to={link}>
              &#8592;
              {linkCopy}
            </Link>
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

MiniHeader.propTypes = propTypes;

export default MiniHeader;
