import React from 'react';
import { shallow } from 'enzyme';

import Home from '../Home';
import HomePost from '../HomePost';

describe('<Home />', () => {
  it('should render properly', () => {
    const posts = {
      '2000-01-01': '<h1>Y2K Bugs</h1>',
    };
    const wrapper = shallow(<Home {...{ posts }} />);
    expect(wrapper.contains(<HomePost post={posts['2000-01-01']} date="2000-01-01" />)).toBe(true);
  });

  it('should order posts by date in descending order', () => {
    const posts = {
      '2000-01-01': '<h1>Y2K Bugs</h1>',
      '2000-01-03': '<h1>Tamaseseri Festival</h1>',
      '2000-01-02': '<h1>A month until Groundhog Day</h1>',
      '2000-01-04': '<h1>World Braille Day</h1>',
    };
    const wrapper = shallow(<Home {...{ posts }} />);
    expect(wrapper.containsAllMatchingElements([
      <HomePost post={posts['2000-01-04']} date="2000-01-04" />,
      <HomePost post={posts['2000-01-03']} date="2000-01-03" />,
      <HomePost post={posts['2000-01-02']} date="2000-01-02" />,
      <HomePost post={posts['2000-01-01']} date="2000-01-01" />,
    ])).toBe(true);
  });
});
