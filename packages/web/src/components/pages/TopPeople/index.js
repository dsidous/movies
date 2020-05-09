import { compose, withProps } from 'recompose';
import { TopPeople } from '@movies/ui';
import { withTopPeople } from '@movies/common';

export default compose(
  withProps(props => {
    const params = new URLSearchParams(props.location.search);
    const page = parseInt(params.get('page'), 10) || 1;

    const query = `page=${page}`;
    return { query };
  }),
  withTopPeople(),
)(TopPeople);
