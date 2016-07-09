import React from 'react';
import moment from 'moment';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Home from '../Home';
import HomePost from '../HomePost';

import posts from '../../assets/posts';

describe('<Home />', () => {
    let node;
    beforeEach(() => {
        node = shallow(<Home />);
    });

    it('renders properly', () => {
        expect(node).to.contain(
            <HomePost
                post={ posts['2016-07-08'] }
                date={ moment('2016-07-08') }
            />
        );
    });
});
