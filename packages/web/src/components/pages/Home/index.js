import { compose, withProps } from 'recompose';
import { Home } from '@movies/ui';
import {
  withPopularMovies,
  withNowPlayingMovies,
  withUpcomingMovies,
} from '@movies/common';

export default compose(
  withProps(() => ({ query: 'page=1' })),
  withPopularMovies(),
  withNowPlayingMovies(),
  withUpcomingMovies(),
)(Home);
