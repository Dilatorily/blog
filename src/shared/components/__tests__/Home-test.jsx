import React from 'react';
import { mount } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies

import Home from '../Home';
import HomePost from '../HomePost';

import posts from '../../assets/posts';

describe('<Home />', () => {
  let node;
  beforeEach(() => {
    node = mount(<Home />);
  });

  it('renders properly', () => {
    expect(node).toContainReact(
      <HomePost post={posts['2016-07-18']} date={'2016-07-18'} />,
    );
  });
});
