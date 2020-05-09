import { compose, withProps } from 'recompose';
import { PersonImages } from '@movies/ui';
import { withPerson, withConfig } from '@movies/common';

export default compose(
  withProps(props => ({ personId: props.match.params.personId })),
  withPerson(),
  withConfig(),
)(PersonImages);
