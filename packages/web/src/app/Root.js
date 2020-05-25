import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { FirebaseAuthProvider, SnackBarProvider } from '@movies/ui';

import MainLayout from '../components/layouts/MainLayout';
import FullLayout from '../components/layouts/FullLayout';
import Movie from '../components/pages/Movie';
import Movies from '../components/pages/Movies';
import Tvs from '../components/pages/Tvs';
import Tv from '../components/pages/Tv';
import Seasons from '../components/pages/Seasons';
import Season from '../components/pages/Season';
import Person from '../components/pages/Person';
import PersonImages from '../components/pages/PersonImages';
import Home from '../components/pages/Home';
import MovieCastCrew from '../components/pages/MovieCastCrew';
import TvCastCrew from '../components/pages/TvCastCrew';
import TopPeople from '../components/pages/TopPeople';
import WatchList from '../components/pages/WatchList';
import SignUp from '../components/pages/SignUp';
import Login from '../components/pages/Login';
import ScrollToTop from '../components/utils/ScrollToTop';

import useStyles from './styles';

const routes = [
  { path: '/movie/:movieId', component: Movie, layout: 'full' },
  { path: '/person/:personId', component: Person, layout: 'normal' },
  {
    path: '/person/:personId/images',
    component: PersonImages,
    layout: 'normal',
  },
  { path: '/movie/:movieId/crew', component: MovieCastCrew, layout: 'normal' },
  { path: '/person', component: TopPeople, layout: 'normal' },
  { path: '/', component: Home, layout: 'normal' },
  { path: '/movies', component: Movies, layout: 'normal' },
  { path: '/login', component: Login, layout: 'normal' },
  { path: '/signup', component: SignUp, layout: 'normal' },
  { path: '/watchlist', component: WatchList, layout: 'normal' },
  { path: '/tvs', component: Tvs, layout: 'normal' },
  { path: '/tv/:tvId', component: Tv, layout: 'full' },
  { path: '/tv/:tvId/crew', component: TvCastCrew, layout: 'normal' },
  { path: '/tv/:tvId/seasons', component: Seasons, layout: 'normal' },
  { path: '/tv/:tvId/season/:season', component: Season, layout: 'normal' },
];

const MatchWithMainLayout = ({ path, component: Component, layout }) => (
  <Route
    exact
    path={path}
    render={props => {
      if (layout === 'full') {
        return (
          <FullLayout>
            <Component {...props} />
          </FullLayout>
        );
      }

      return (
        <MainLayout>
          <Component {...props} />
        </MainLayout>
      );
    }}
  />
);

const Root = () => {
  useStyles();
  return (
    <FirebaseAuthProvider>
      <SnackBarProvider>
        <Router>
          <ScrollToTop />
          {routes.map(({ path, component, layout }) => (
            <MatchWithMainLayout
              key={path}
              path={path}
              component={component}
              layout={layout}
            />
          ))}
        </Router>
      </SnackBarProvider>
    </FirebaseAuthProvider>
  );
};

export default Root;
