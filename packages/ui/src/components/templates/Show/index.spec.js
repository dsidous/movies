import React from 'react';
import { useHistory as useHistoryMock } from 'react-router-dom';
import { shallow } from 'enzyme';

import useConfig from '../../hooks/useConfig';
import ShowProfile from '../../organisms/ShowProfile';
import Show from '.';

jest.mock('../../hooks/useConfig.js');

useConfig.mockReturnValue({
  getImageURL: () => 'http://example.url/image',
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: jest.fn(),
}));

const mockProps = {
  config: {
    images: {
      secure_base_url: 'path/to/image',
      poster_sizes: ['1', '2', '3', '4'],
      backdrop_sizes: ['1', '2', '3', '4'],
    },
  },
  show: {
    id: 1,
    title: 'title',
  },
};

describe('Templates/Show', () => {
  const setHistory = jest.fn();

  useHistoryMock.mockImplementation(() => ({
    push: setHistory,
  }));

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Show {...mockProps} />);
  });

  afterEach(() => {
    setHistory.mock.calls = [];
  });

  it('should render as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle show click', () => {
    const newMovieId = 2;

    wrapper.find(ShowProfile).props().handleShowClick(newMovieId);

    expect(setHistory.mock.calls[0][0]).toEqual(`/movie/${newMovieId}`);
  });
});
