import { render, screen } from '@testing-library/react';
import React from 'react';
import { TestId } from '../../constants';
import Article from './Article';

describe('Article component', () => {
  const article = (
    <Article>{'<h1>Title</h1><p>Paragraph content</p><h1>Title 2</h1><p>Paragraph 2</p>'}</Article>
  );

  it('renders a H2 tag', () => {
    render(article);
    const heading = screen.getByRole('heading', { level: 2 });

    expect(heading).toBeInTheDocument();
  });

  it('parses the first H1 tag in the rendered H2 tag', () => {
    render(article);
    const heading = screen.getByRole('heading', { level: 2 });

    expect(heading).toHaveTextContent('Title');
  });

  it('renders a paragraph tag', () => {
    render(article);
    const paragraph = screen.getByTestId(TestId.HomeArticlePreview);

    expect(paragraph).toBeInTheDocument();
    expect(paragraph.tagName).toBe('P');
  });

  it('parses the first paragraph tag in the rendered paragraph tag', () => {
    render(article);
    const paragraph = screen.getByTestId(TestId.HomeArticlePreview);

    expect(paragraph).toHaveTextContent('Paragraph content');
  });
});
