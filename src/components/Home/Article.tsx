import React, { memo } from 'react';
import { Tag, TestId } from '../../constants';
import { getContentFromFirstTag, testId } from '../../utils';
import ArticleContainer from './ArticleContainer';
import Preview from './Preview';
import Title from './Title';

interface ArticleProps {
  children: string;
}

function Article({ children }: ArticleProps) {
  return (
    <ArticleContainer>
      <Title>{getContentFromFirstTag(children, Tag.Heading1)}</Title>
      <Preview data-testid={testId(TestId.HomeArticlePreview)}>
        {getContentFromFirstTag(children, Tag.Paragraph)}
      </Preview>
    </ArticleContainer>
  );
}

export default memo(Article);
