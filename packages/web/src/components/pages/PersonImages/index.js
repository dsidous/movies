import { compose, withProps } from 'recompose';
import { PersonImages } from '@movies/ui';
import { withPerson } from '@movies/common';

export default compose(
  withProps(props => ({ personId: props.match.params.personId })),
  withPerson(),
)(PersonImages);
