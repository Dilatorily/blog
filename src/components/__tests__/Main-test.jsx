import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Main from '../Main';

describe('<Main />', () => {
    let node;
    beforeEach(() => {
        node = shallow(<Main />);
    });

    it('renders properly', () => {
        expect(node).to.have
            .text('Hello, World from React with hot reload and Radium!');
    });
});
