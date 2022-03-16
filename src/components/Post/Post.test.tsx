import { render, screen } from '@testing-library/react';
import React from 'react';
import Post from './Post';

describe('Post component', () => {
  const post = <Post date="2000-01-01">{'<h1>Hello World!</h1>'}</Post>;

  it('renders a H3 tag', () => {
    render(post);
    const date = screen.getByRole('heading', { level: 3 });

    expect(date).toBeInTheDocument();
  });

  it('renders the date of the post', () => {
    render(post);
    const date = screen.getByRole('heading', { level: 3 });

    expect(date).toHaveTextContent('Saturday, January 1st, 2000');
  });

  it('renders an article tag', () => {
    render(post);
    const article = screen.getByRole('article');

    expect(article).toBeInTheDocument();
  });

  it('renders the content of the post', () => {
    render(post);
    const article = screen.getByRole('article');

    expect(article).toHaveTextContent('Hello World!');
  });
});
