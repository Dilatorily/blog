import React from 'react';
import PropTypes from 'prop-types';
import ArticleContainer from './ArticleContainer';

const Article = ({ post }) => (
  <ArticleContainer
    dangerouslySetInnerHTML={{ __html: post }} // eslint-disable-line react/no-danger
  />
);

Article.propTypes = { post: PropTypes.string.isRequired };

export default Article;
