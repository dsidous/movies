import { compose, withProps } from 'recompose';
import { Shows } from '@movies/ui';
import { withTvGenres } from '@movies/common';

export default compose(
  withProps(() => ({ media: 'tvs', resultMedia: 'tv' })),
  withTvGenres(),
)(Shows);
