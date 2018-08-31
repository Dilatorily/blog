import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import Article from './Article';
import Link from './Link';
import PostContainer from './PostContainer';
import Timestamp from './Timestamp';

const Post = ({ date, post }) => (
  <PostContainer>
    <Link to={`/posts/${date}`}>
      <Article post={post} />
      <Timestamp>{format(new Date(date), 'MMMM Do, YYYY')}</Timestamp>
    </Link>
  </PostContainer>
);

Post.propTypes = {
  post: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Post;
