import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withConfig } from '@movies/common';

import ConfigContext from '../contexts/ConfigContext';
import * as NoImage from '../../images/noimage.jpg';
import * as NoBdImage from '../../images/nobdimage.jpg';
import * as NoImageSq from '../../images/noimagesq.jpg';

import { Config } from '../../types/config';

export interface GetImageUrlProps {
  filePath: string;
  mediaType: string;
  size: number;
}

interface Props {
  children: React.ReactNode;
  configLoading: boolean;
  config: Config;
  getImageURL: ({ filePath, mediaType, size }: GetImageUrlProps) => string;
}

const ConfigProvider:React.FC<Props> = ({ children, configLoading, ...props }) => {
  const [config, setConfig] = useState<Config | null>(null);
  useEffect(() => {
    setConfig(props.config);
  }, [configLoading]);

  const getImageURL = ({ filePath, mediaType, size }: GetImageUrlProps): string => {
    const imageType = `${mediaType}_sizes`;
    let imageUrl;
    switch (mediaType) {
      case 'backdrop':
        imageUrl = NoBdImage;
        break;
      case 'miniProfile':
        imageUrl = NoImageSq;
        break; 
      default:
        imageUrl = NoImage;
    }

    if (!configLoading && filePath !== null) {
      let sizePath;
      switch (mediaType) {
        case 'miniProfile':
          sizePath = 'w132_and_h132_face/';
          break;
        case 'slider':
          sizePath = '/w220_and_h330_face';
          break;
        default:
          sizePath = config?.images[imageType][size];          
      }
      imageUrl = `${config?.images.secure_base_url}${sizePath}${filePath}`;
    }

    return imageUrl;
  };

  const value = { config, getImageURL };

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
};

ConfigProvider.propTypes = {
  children: PropTypes.node.isRequired,
  configLoading: PropTypes.bool.isRequired,
};

export default withConfig()(ConfigProvider);
