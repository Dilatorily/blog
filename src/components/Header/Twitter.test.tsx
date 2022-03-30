import { render, screen } from '@testing-library/react';
import React from 'react';
import { TestId } from '../../constants';
import Twitter from './Twitter';

describe('Twitter', () => {
  const twitter = <Twitter />;

  it('renders a list item tag', () => {
    render(twitter);
    const item = screen.getByRole('listitem');

    expect(item).toBeInTheDocument();
  });

  it('renders an anchor tag', () => {
    render(twitter);
    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });

  it('renders a link to my Twitter profile', () => {
    render(twitter);
    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', 'https://twitter.com/Dagneau');
  });

  it('renders the Twitter icon as a SVG', () => {
    render(twitter);
    const svg = screen.getByTestId(TestId.HeaderIcon);

    expect(svg).toBeInTheDocument();
  });
});
