import { compose, withProps } from 'recompose';
import { Season } from '@movies/ui';
import { withSeason } from '@movies/common';

export default compose(
  withProps(props => {
    const tvId = parseInt(props.match.params.tvId, 10);
    const season = parseInt(props.match.params.season, 10);
    return { tvId, season };
  }),
  withSeason(),
)(Season);
