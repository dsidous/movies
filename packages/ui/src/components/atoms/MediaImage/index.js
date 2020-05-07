import React from 'react'
import { withConfig } from '@movies/common'

import { propTypes } from './propTypes'
import NoImage from '../../../images/noimage.jpg'

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
    return null
  }

  let imageUrl = NoImage

  if (filePath !== null) {
    const sizePath =
      mediaType === 'miniProfile'
        ? 'w132_and_h132_face/'
        : images[`${mediaType}_sizes`][size]

    imageUrl = `${images.secure_base_url}${sizePath}${filePath}`
  }

  return <img src={imageUrl} alt={name} {...otherProps} />
}

MediaImage.propTypes = propTypes

export default withConfig()(MediaImage)
