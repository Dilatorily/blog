import React from 'react';
import Radium from 'radium';
import moment from 'moment';

import posts from '../assets/posts';

import HomePost from './HomePost';

const styles = {
    posts: {
        listStyleType: 'none',
        margin: 0,
        padding: 0
    }
};

const compareDateDesc = (a, b) => {
    const SMALLER = -1;
    const GREATER = 1;
    const SAME = 0;

    if (moment(a).isAfter(moment(b))) {
        return SMALLER;
    } else if (moment(a).isBefore(moment(b))) {
        return GREATER;
    }

    return SAME;
};

const Home = () =>
    <ul style={ styles.posts }>
        {
            Object.keys(posts)
                .sort(compareDateDesc)
                .map((date, index) =>
                <HomePost
                    key={ index }
                    post={ posts[date] }
                    date={ moment(date) }
                />
            )
        }
    </ul>
;

export default Radium(Home);
