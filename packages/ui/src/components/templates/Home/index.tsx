/** @jsxFrag React.Fragment */
import React from 'react';

import PageTransition from '../../atoms/PageTransition';
import Section from '../../atoms/Section';
import TopRatedMovies from '../../organisms/TopRatedMovies';
import SlideList from '../../molecules/SlideList';
import { Movie } from '@typesRoots/movie';

interface Props {
  nowPlayingLoading: boolean;
  upcomingLoading: boolean;
  nowplaying: Movie[];
  upcoming: Movie[];
  popular: Movie[];
}

const Home: React.FC<Props> = ({
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
