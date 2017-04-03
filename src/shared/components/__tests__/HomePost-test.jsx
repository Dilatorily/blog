import React from 'react';
import { shallow } from 'enzyme';

import HomePost from '../HomePost';

describe('<HomePost />', () => {
  it('should render properly', () => {
    const post = '<h1>Y2K Bugs</h1>';
    const wrapper = shallow(<HomePost post={post} date="2000-01-01T00:00:00.000-05:00" />);
    expect(wrapper.containsMatchingElement(<h2>Y2K Bugs</h2>)).toBe(true);
    expect(wrapper.containsMatchingElement(<h3>January 1st, 2000</h3>)).toBe(true);
  });
});
