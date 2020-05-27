import React from 'react';

import Spinner from '../../atoms/Spinner';
import PageTransition from '../../atoms/PageTransition';
import Section from '../../atoms/Section';
import TopRatedMovies from '../../organisms/TopRatedMovies';
import SlideList from '../../molecules/SlideList';
import { propTypes, defaultProps } from './propTypes';

import useStyles from './styles';

const Home = ({
  nowPlayingLoading,
  popularLoading,
  upcomingLoading,
  nowplaying,
  upcoming,
  popular,
}) => {
  if (nowPlayingLoading || popularLoading || upcomingLoading) {
    return <Spinner />;
  }

  const classes = useStyles();

  return (
    <PageTransition>
      <TopRatedMovies popular={popular} />

      <Section noborder disableGutters>
        <Section.Header>In Theatres</Section.Header>
        <SlideList items={nowplaying} />
      </Section>
      <Section noborder disableGutters>
        <Section.Header>Upcoming Movies</Section.Header>
        <SlideList items={upcoming} />
      </Section>
    </PageTransition>
  );
};

export default Home;

Home.defaultProps = defaultProps;

Home.propTypes = propTypes;
