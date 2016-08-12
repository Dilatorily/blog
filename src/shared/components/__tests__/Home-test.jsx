import React from 'react';
import moment from 'moment';
import { expect } from 'chai'; // eslint-disable-line import/no-extraneous-dependencies
import { shallow } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies

import Home from '../Home';
import HomePost from '../HomePost';

import posts from '../../assets/posts';

describe('<Home />', () => {
  let node;
  beforeEach(() => {
    node = shallow(<Home />);
  });

  it('renders properly', () => {
    expect(node).to.contain(<HomePost post={posts['2016-07-18']} date={moment('2016-07-18')} />);
  });
});
