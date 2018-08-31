import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import App from '../shared/components/App';

const Root = ({ posts }) => (
  <BrowserRouter>
    <App posts={posts} />
  </BrowserRouter>
);

Root.propTypes = {
  posts: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Root;
