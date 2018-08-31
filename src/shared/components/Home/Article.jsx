import React from 'react';
import PropTypes from 'prop-types';
import ArticleContainer from './ArticleContainer';
import Title from './Title';
import Preview from './Preview';
import { getContentFromFirstTag } from '../../utils';

const Article = ({ post }) => (
  <ArticleContainer>
    <Title>{getContentFromFirstTag(post, 'h1')}</Title>
    <Preview>{getContentFromFirstTag(post, 'p')}</Preview>
  </ArticleContainer>
);

Article.propTypes = {
  post: PropTypes.string.isRequired,
};

export default Article;
