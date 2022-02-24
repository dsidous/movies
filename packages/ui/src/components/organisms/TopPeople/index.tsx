import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';

import MyPager from '../../atoms/Pager';
import Section from '../../atoms/Section';
import MediaImage from '../../atoms/MediaImage';
import PageTransition from '../../atoms/PageTransition/index';
import SEO from '../../atoms/SEO';
import useStyles from './styles';
import { Top_person } from '@typesRoots/toppeople';

interface Props {
  toppeople: Top_person[];
  page: number;
  handlePageSelect: (e: number) => void;
}

const TopPeopleProfile: React.FC<Props> = ({
  toppeople,
  page,
  handlePageSelect,
}) => {
  const classes = useStyles();

  return (
    <PageTransition>
      <SEO title='Popular people' />
      <Section noborder disableGutters>
        <Section.Header>POPULAR PEOPLE</Section.Header>
        <div className={classes.list}>
          {(!toppeople.length ? Array.from(new Array(8)) : toppeople).map(
            (person, index) => (
              <Fragment key={person?.id || index}>
                {toppeople.length ? (
                  <Link key={person.id} to={`/person/${person.id}`}>
                    <figure className={classes.item}>
                      <MediaImage
                        mediaType='profile'
                        size={1}
                        filePath={person.profile_path}
                        name={person.name}
                      />
                      <figcaption className={classes.name}>
                        {person.name}
                      </figcaption>
                    </figure>
                  </Link>
                ) : (
                  <div>
                    <Skeleton variant='rect' height={300} />
                    <Skeleton />
                  </div>
                )}
              </Fragment>
            )
          )}
        </div>
        <MyPager page={page} handlePageSelect={handlePageSelect} />
      </Section>
    </PageTransition>
  );
};

export default TopPeopleProfile;
