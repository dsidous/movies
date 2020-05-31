import React, { Fragment } from 'react';

import PageTransition from '../../atoms/PageTransition';
import Section from '../../atoms/Section';
import TopRatedMovies from '../../organisms/TopRatedMovies';
import SlideList from '../../molecules/SlideList';
import { propTypes, defaultProps } from './propTypes';

const Home = ({
  nowPlayingLoading,
  upcomingLoading,
  nowplaying,
  upcoming,
  popular,
}) => {
  return (
    <PageTransition>
      <TopRatedMovies popular={popular} />

      {!nowPlayingLoading && !upcomingLoading && (
        <>
          <Section noborder disableGutters>
            <Section.Header>In Theatres</Section.Header>
            <SlideList items={nowplaying} />
          </Section>
          <Section noborder disableGutters>
            <Section.Header>Upcoming Movies</Section.Header>
            <SlideList items={upcoming} />
          </Section>
        </>
      )}
    </PageTransition>
  );
};

export default Home;

Home.defaultProps = defaultProps;

Home.propTypes = propTypes;
