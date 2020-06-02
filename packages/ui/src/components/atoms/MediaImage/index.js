import React from 'react';

import useConfig from '../../hooks/useConfig';
import { propTypes } from './propTypes';

const MediaImage = ({ filePath, name, size, mediaType, ...otherProps }) => {
  const { getImageURL } = useConfig();

  const imageUrl = getImageURL({
    filePath,
    size,
    mediaType,
  });

  return <img src={imageUrl} alt={name} {...otherProps} />;
};

MediaImage.propTypes = propTypes;

export default MediaImage;
