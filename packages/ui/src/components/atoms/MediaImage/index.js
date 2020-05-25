import React from 'react';
import { withConfig } from '@movies/common';

import { propTypes } from './propTypes';
import NoImage from '../../../images/noimage.jpg';

const MediaImage = ({
  config: { images },
  filePath,
  name,
  size,
  mediaType,
  configLoading,
  ...otherProps
}) => {
  if (configLoading) {
    return null;
  }

  let imageUrl = NoImage;

  if (filePath !== null) {
    let sizePath;
    switch (mediaType) {
      case 'miniProfile':
        sizePath = 'w132_and_h132_face/';
        break;
      case 'slider':
        sizePath = '/w220_and_h330_face';
        break;
      default:
        sizePath = images[`${mediaType}_sizes`][size];
    }
    imageUrl = `${images.secure_base_url}${sizePath}${filePath}`;
  }

  return <img src={imageUrl} alt={name} {...otherProps} />;
};

MediaImage.propTypes = propTypes;

export default withConfig()(MediaImage);
