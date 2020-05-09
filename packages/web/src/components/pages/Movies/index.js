import { compose, withProps } from 'recompose';
import { Shows } from '@movies/ui';
import { withGenres } from '@movies/common';

export default compose(
  withProps(() => ({ media: 'movies', resultMedia: 'movie' })),
  withGenres(),
)(Shows);
