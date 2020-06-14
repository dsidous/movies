import React from 'react';
import { shallow } from 'enzyme';

import WatchlistBookmark from '.';
import useWatchList from '../../hooks/useWatchList';
import useSnackBars from '../../hooks/useSnackBars';

jest.mock('../../hooks/useWatchList');
jest.mock('../../hooks/useSnackBars');

useWatchList.mockReturnValue({
  authUser: 'user',
  watchlist: [],
  toggleMovie: () => '',
});

useSnackBars.mockReturnValue({
  addAlert: () => 'alert',
});

const mockProps = {
  movie: {
    id: 1,
  },
  user: {},
};

describe('Atoms/WatchlistBookmark', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<WatchlistBookmark {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
