import React from 'react';
import { shallow } from 'enzyme';

import * as firebase from '@movies/firebase/firebase';
import SignOutButton from '.';

describe('Atoms/SignOutButton', () => {
  beforeAll(() => {
    firebase.auth = jest.fn().mockReturnValue({
      currentUser: true,
      doSignOut: jest.fn(),
    });
  });

  it('should render as expected', () => {
    const wrapper = shallow(<SignOutButton />);

    expect(wrapper).toMatchSnapshot();
  });
});
