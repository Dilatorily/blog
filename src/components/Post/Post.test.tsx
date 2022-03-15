import { render, screen } from '@testing-library/react';
import React from 'react';
import Post from './Post';

describe('Post component', () => {
  const content = '<h1>Hello World!</h1>';
  const post = <Post date="2000-01-01">{content}</Post>;

  it('renders the date of the post', () => {
    render(post);
    expect(screen.getByText('Saturday, January 1st, 2000')).toBeInTheDocument();
  });

  it('renders the content of the post', () => {
    render(post);
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});
