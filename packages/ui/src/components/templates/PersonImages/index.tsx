import React from 'react';
import Typography from '@material-ui/core/Typography';

import Section from '../../atoms/Section';
import MediaImage from '../../atoms/MediaImage';
import Spinner from '../../atoms/Spinner';
import PageTransition from '../../atoms/PageTransition';
import MiniHeader from '../../molecules/MiniHeader';
import useStyles from './styles';
import useConfig from '../../hooks/useConfig';
import { Person, Profile_Image } from '@typesRoots/person';

interface Props {
  loading: boolean;
  person: Person;
}

const PersonImages: React.FC<Props> = ({
  loading,
  person: { images, name, id, birthday, profile_path },
}) => {
  if (loading) {
    return <Spinner />;
  }

  const classes = useStyles();
  const { getImageURL } = useConfig();

  const list = ([] as Profile_Image[])
    .concat(images)
    .sort((a, b) => b.vote_average - a.vote_average)
    .map((image) => (
      <figure key={image.file_path} className={classes.item}>
        <a
          href={getImageURL({
            filePath: image.file_path,
            mediaType: 'profile',
            size: 3,
          })}
          target='_blank'
          rel='noopener noreferrer'
        >
          <MediaImage
            mediaType='profile'
            size={2}
            filePath={image.file_path}
            name={name}
          />
          <figcaption>
            <Typography variant='caption'>
              Size:
              <span>{` ${image.height} x ${image.width}`}</span>
            </Typography>
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
        linkCopy='Back to main'
      />
      <Section noborder disableGutters>
        <div className={classes.root}>{list}</div>
      </Section>
    </PageTransition>
  );
};

export default PersonImages;
