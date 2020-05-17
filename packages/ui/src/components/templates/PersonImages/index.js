/* eslint-disable camelcase */
import React from 'react';

import { propTypes } from './propTypes';
import MediaImage from '../../atoms/MediaImage';
import Spinner from '../../atoms/Spinner';
import PageTransition from '../../atoms/PageTransition';
import MiniHeader from '../../molecules/MiniHeader';
import useStyles from './styles';

const PersonImages = ({
  loading,
  person: { images, name, id, birthday, profile_path },
  config,
}) => {
  if (loading) {
    return <Spinner />;
  }

  const classes = useStyles();

  const {
    images: { secure_base_url, profile_sizes },
  } = config;

  const list = []
    .concat(images)
    .sort((a, b) => b.vote_average - a.vote_average)
    .map(image => (
      <figure key={image.file_path} className={classes.item}>
        <a
          href={secure_base_url + profile_sizes[3] + image.file_path}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MediaImage
            mediaType="profile"
            size={2}
            filePath={image.file_path}
            name={name}
          />
          <figcaption>
            <p>
              Size:
              <br />
              {`${image.height} x ${image.width}`}
            </p>
          </figcaption>
        </a>
      </figure>
    ));
  return (
    <PageTransition>
      <MiniHeader
        title={name}
        release_date={birthday}
        poster_path={profile_path}
        link={`/person/${id}`}
        linkCopy="Back to main"
      />

      <div className={classes.root}>{list}</div>
    </PageTransition>
  );
};

PersonImages.propTypes = propTypes;

export default PersonImages;
