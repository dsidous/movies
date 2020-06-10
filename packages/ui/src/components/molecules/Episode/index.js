import React from 'react';
import { FormattedDate, IntlProvider } from 'react-intl';
import { Box, Typography } from '@material-ui/core';

import { propTypes } from './propTypes';
import MediaImage from '../../atoms/MediaImage';
import useStyles from './styles';

const Episode = ({
  episode: { name, air_date, episode_number, overview, still_path },
}) => {
  const classes = useStyles();

  return (
    <IntlProvider locale={navigator.language}>
      <Box className={classes.root}>
        <MediaImage
          className={classes.poster}
          mediaType="still"
          size={3}
          filePath={still_path}
          name={name}
        />
        <Box className={classes.details}>
          <Typography variant="subtitle2">{name}</Typography>
          <Typography variant="caption" component="div" paragraph>
            <FormattedDate
              value={air_date || ''}
              year="numeric"
              month="long"
              day="2-digit"
            />
            {` | episode ${episode_number}`}
          </Typography>
          <Typography>{overview}</Typography>
        </Box>
      </Box>
    </IntlProvider>
  );
};

Episode.propTypes = propTypes;

export default Episode;
