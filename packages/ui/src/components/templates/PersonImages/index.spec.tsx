import React from 'react';
import { shallow } from 'enzyme';
import useConfig from '../../hooks/useConfig';
import PersonImages from '.';

jest.mock('../../hooks/useConfig.js');

useConfig.mockReturnValue({
  getImageURL: () => 'http://example.url/image',
});

const mockProps = {
  person: {
    images: [
      {
        file_path: 'path/to/image',
        vote_average: 1,
        height: 1,
        width: 1,
      },
      {
        file_path: 'path/to/image',
        vote_average: 2,
        height: 1,
        width: 1,
      },
    ],
    name: 'name',
    id: 1,
    birthday: '10.10.2010',
    profile_path: 'path/to/image',
  },
  loading: false,
};

describe('Templates/PersonImages', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<PersonImages {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render a spinner when loading expected', () => {
    const wrapper = shallow(<PersonImages {...mockProps} loading />);

    expect(wrapper).toMatchSnapshot();
  });
});
