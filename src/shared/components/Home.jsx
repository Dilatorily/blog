import React from 'react';
import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies
import isAfter from 'date-fns/is_after';

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
  }

  return 1;
};

const Home = ({ posts }) => (
  <ul style={styles.posts}>
    {
      Object.keys(posts)
        .sort(compareDateDesc)
        .map(date => <HomePost key={date} post={posts[date]} date={date} />)
    }
  </ul>
);

Home.propTypes = {
  posts: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Home;
