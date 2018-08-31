import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import Posts from './Posts';
import { compareDate } from '../../utils';

const Home = ({ posts }) => (
  <Posts>
    {
      Object.entries(posts)
        .sort(([a], [b]) => compareDate(b, a))
        .map(([date, post]) => <Post date={date} key={date} post={post} />)
    }
  </Posts>
);

Home.propTypes = {
  posts: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Home;
