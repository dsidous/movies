import { compose, withProps } from 'recompose';
import { Show } from '@movies/ui';
import { withMovie } from '@movies/common';

export default compose(
  withProps(props => ({ movieId: props.match.params.movieId })),
  withMovie(),
)(Show);
