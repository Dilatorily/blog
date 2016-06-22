import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
    let node;
    beforeEach(() => {
        node = shallow(<App />);
    });

    it('renders properly', () => {
        expect(node).to.have
            .text('Hello, World from React with hot reload and Radium!');
    });
});
