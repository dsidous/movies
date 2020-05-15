import React from 'react';
import { Link } from 'react-router-dom';

import { propTypes } from './propTypes';
import MyPager from '../../atoms/Pager';
import MediaImage from '../../atoms/MediaImage';
import PageTransition from '../../atoms/PageTransition/index';
import SEO from '../../atoms/SEO';
import useStyles from './styles';

const TopPeopleProfile = ({ toppeople, page, handlePageSelect }) => {
  const classes = useStyles();

  return (
    <PageTransition>
      <SEO title="Popular people" />
      <div className={classes.root}>
        <h2>POPULAR PEOPLE</h2>
        <div className={classes.list}>
          {toppeople.map(person => (
            <Link key={person.id} to={`/person/${person.id}`}>
              <figure className={classes.item}>
                <MediaImage
                  mediaType="profile"
                  size={1}
                  filePath={person.profile_path}
                  name={person.name}
                />
                <figcaption className={classes.name}>{person.name}</figcaption>
              </figure>
            </Link>
          ))}
        </div>
        <MyPager page={page} handlePageSelect={handlePageSelect} />
      </div>
    </PageTransition>
  );
};

TopPeopleProfile.propTypes = propTypes;

export default TopPeopleProfile;
