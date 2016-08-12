import React from 'react';
import radium from 'radium';
import moment from 'moment';

import posts from '../assets/posts';
import HomePost from './HomePost';

const styles = {
  posts: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
};

const compareDateDesc = (a, b) => {
  if (moment(a).isAfter(moment(b))) {
    return -1;
  } else if (moment(a).isBefore(moment(b))) {
    return 1;
  }

  return 0;
};

const Home = () =>
  <ul style={styles.posts}>
    {
      Object.keys(posts)
        .sort(compareDateDesc)
        .map((date, index) => <HomePost key={index} post={posts[date]} date={moment(date)} />)
    }
  </ul>
;

export default radium(Home);
