import React from 'react';
import Radium from 'radium';
import isAfter from 'date-fns/is_after';
import isBefore from 'date-fns/is_before';

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
  if (isAfter(new Date(a), new Date(b))) {
    return -1;
  } else if (isBefore(new Date(a), new Date(b))) {
    return 1;
  }

  return 0;
};

const Home = () =>
  <ul style={styles.posts}>
    {
      Object.keys(posts)
        .sort(compareDateDesc)
        .map(date => <HomePost key={date} post={posts[date]} date={date} />)
    }
  </ul>
;

export default Radium(Home);
