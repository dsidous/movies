/* eslint-disable no-underscore-dangle */
import _ from 'lodash';
import React from 'react';
import Alert from '@material-ui/lab/Alert';

import Section from '../../atoms/Section';
import FirebaseAuthContext from '../../contexts/FirebaseAuthContext';
import MovieCard from '../../molecules/MovieCard';
import PageTransition from '../../atoms/PageTransition';

import useStyles from './styles';

const WatchList: React.FC = () => {
  const classes = useStyles();

  return (
    <PageTransition>
      <FirebaseAuthContext.Consumer>
        {({ user, authUser }) => (
          <Section noborder disableGutters>
            <Section.Header>My Watchlist</Section.Header>
            {_.size(authUser && user?.watchlist) > 0 ? (
              <ul className={classes.list}>
                {_.map(user?.watchlist, (movie) => {
                  const media = movie.name !== '' ? 'tv' : 'movie';
                  return (
                    <MovieCard key={movie.id} movie={movie} media={media} />
                  );
                })}
              </ul>
            ) : (
              authUser && (
                <Alert severity='info'>
                  No movie or tv show added to your watchlist yet.
                </Alert>
              )
            )}
            {!authUser && (
              <Alert severity='error'>
                Please log in or register for manage your watchlist
              </Alert>
            )}
          </Section>
        )}
      </FirebaseAuthContext.Consumer>
    </PageTransition>
  );
};

export default WatchList;
