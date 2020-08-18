import { compose, withProps } from 'recompose';
import { withUpcomingMovies } from '@movies/common';

import Home from '../templates/Home';

export default compose(
  withProps(() => ({ query: 'page=1' })),
  withUpcomingMovies(),
)(Home);
