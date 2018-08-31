import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import format from 'date-fns/format';
import Article from './Article';
import Timestamp from './Timestamp';

const Post = ({ match: { params: { date } }, posts }) => {
  if (!posts[date]) {
    return <Redirect push to="/" />;
  }

  return (
    <Fragment>
      <Timestamp>{format(date, 'dddd, MMMM Do, YYYY')}</Timestamp>
      <Article post={posts[date]} />
    </Fragment>
  );
};

Post.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      date: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  posts: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Post;
