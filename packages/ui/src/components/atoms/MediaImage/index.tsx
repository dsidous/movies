import React from 'react';

import useConfig from '../../hooks/useConfig';

interface Props {
  filePath: string;
  name: string;
  size: number;
  mediaType: string;
  className?: string;
}

const MediaImage: React.FC<Props> = ({
  filePath,
  name,
  size,
  mediaType,
  ...otherProps
}) => {
  const { getImageURL } = useConfig();

  const imageUrl = getImageURL({
    filePath,
    size,
    mediaType,
  });

  return <img src={imageUrl} alt={name} {...otherProps} />;
};

export default MediaImage;
