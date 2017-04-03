import React from 'react';
import { shallow } from 'enzyme';

import SVGIcon from '../SVGIcon';

describe('<SVGIcon />', () => {
  it('should render properly', () => {
    const wrapper = shallow(<SVGIcon path="abc" />);
    expect(wrapper.containsMatchingElement(<path d="abc" />)).toBe(true);
  });

  it('should use the size property', () => {
    const wrapper = shallow(<SVGIcon path="abc" size={25} />);
    expect(wrapper.containsMatchingElement(
      <svg height={25} width={25}>
        <path />
      </svg>,
    )).toBe(true);
  });
});
