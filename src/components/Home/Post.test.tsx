import { render, screen } from '@testing-library/react';
import React from 'react';
import Post from './Post';

describe('Post component', () => {
  const post = (
    <Post date="2000-01-01">
      {'<h1>Title</h1><p>Paragraph content</p><h1>Title 2</h1><p>Paragraph 2</p>'}
    </Post>
  );

  it('renders a link to the post', () => {
    render(post);
    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/posts/2000-01-01');
  });

  it('renders an article', () => {
    render(post);
    const article = screen.getByRole('article');

    expect(article).toBeInTheDocument();
  });

  it('renders a H3 tag', () => {
    render(post);
    const heading = screen.getByRole('heading', { level: 3 });

    expect(heading).toBeInTheDocument();
  });

  it('renders the date in the H3 tag', () => {
    render(post);
    const heading = screen.getByRole('heading', { level: 3 });

    expect(heading).toHaveTextContent('January 1st, 2000');
  });
});
