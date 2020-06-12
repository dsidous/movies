/** @jsxFrag React.Fragment */
import React from 'react';
import { FormattedDate } from 'react-intl';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import Skeleton from './skeleton';

import { propTypes } from './propTypes';
import Section from '../../atoms/Section';
import SEO from '../../atoms/SEO';
import MediaImage from '../../atoms/MediaImage';
import LongCopy from '../../atoms/LongCopy';
import PersonShows from '../../molecules/PersonShows';
import PersonKnownFor from '../../molecules/PersonKnownFor';
import useStyles from './styles';

const PersonProfile = ({ person }) => {
  const classes = useStyles();

  if (!person.id) {
    return <Skeleton />;
  }

  const {
    biography,
    birthday,
    deathday,
    name,
    place_of_birth,
    profile_path,
    combined_credits,
    id,
  } = person;

  let firstName;
  let lastName;

  if (name) {
    [firstName, ...lastName] = name.split(' ');
    lastName = lastName.join(' ');
  }

  return (
    <>
      <SEO title={name} />
      <Section noborder disableGutters>
        <div className={classes.infoRoot}>
          <div className={classes.poster}>
            <Link to={`/person/${id}/images`}>
              <MediaImage
                className="img-responsive center-block"
                mediaType="profile"
                size={2}
                filePath={profile_path}
                name="poster"
              />
            </Link>
          </div>
          <div className={classes.info}>
            <Typography className={classes.name} data-name={lastName}>
              {firstName}
            </Typography>
            <Typography variant="body2">
              {`${lastName}, ${place_of_birth}`}
              {birthday && (
                <span>
                  ,&nbsp;
                  <FormattedDate
                    value={birthday}
                    year="numeric"
                    month="long"
                    day="2-digit"
                  />
                </span>
              )}
              {deathday && (
                <span>
                  &nbsp;-&nbsp;
                  <FormattedDate
                    value={deathday}
                    year="numeric"
                    month="long"
                    day="2-digit"
                  />
                </span>
              )}
            </Typography>
          </div>
          {biography && (
            <div className={classes.bioRoot}>
              <Typography variant="subtitle2" gutterBottom paragraph>
                Biography
              </Typography>
              <div className={classes.bio}>
                <LongCopy content={biography} max={1000} />
              </div>
            </div>
          )}
        </div>
      </Section>
      <Section disableGutters>
        <Section.Header>Known For</Section.Header>
        <div className={classes.knowns}>
          <PersonKnownFor combinedCredits={combined_credits} />
        </div>
      </Section>
      <Section disableGutters>
        <Section.Header>Filmography</Section.Header>
        <div className={classes.shows}>
          <PersonShows shows={combined_credits} />
        </div>
      </Section>
    </>
  );
};

PersonProfile.propTypes = propTypes;

export default PersonProfile;
