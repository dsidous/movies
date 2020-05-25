import React from 'react';

import { Typography, Box } from '@material-ui/core';
import { propTypes, defaultProps } from './propTypes';
import Spinner from '../../atoms/Spinner';
import PageTransition from '../../atoms/PageTransition';
import TopRatedMovies from '../../organisms/TopRatedMovies';
import SlideList from '../../molecules/SlideList';

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

      <Box component="section" mt={7}>
        <Typography variant="h5" gutterBottom>
          In Theatres
        </Typography>
        <SlideList items={nowplaying} />
      </Box>
      <Box component="section" mt={7}>
        <Typography variant="h5" gutterBottom>
          Upcoming Movies
        </Typography>
        <SlideList items={upcoming} />
      </Box>
    </PageTransition>
  );
};

export default Home;

Home.defaultProps = defaultProps;

Home.propTypes = propTypes;
