import { compose, withProps } from 'recompose';
import { Seasons } from '@movies/ui';
import { withTv } from '@movies/common';

export default compose(
  withProps(props => ({ tvId: props.match.params.tvId })),
  withTv(),
)(Seasons);
