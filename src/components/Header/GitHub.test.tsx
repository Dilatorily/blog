import { render, screen } from '@testing-library/react';
import React from 'react';
import { TestId } from '../../constants';
import GitHub from './GitHub';

describe('GitHub', () => {
  const github = <GitHub />;

  it('renders a list item tag', () => {
    render(github);
    const item = screen.getByRole('listitem');

    expect(item).toBeInTheDocument();
  });

  it('renders an anchor tag', () => {
    render(github);
    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });

  it('renders a link to my GitHub profile', () => {
    render(github);
    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', 'https://github.com/Dilatorily');
  });

  it('renders the GitHub icon as a SVG', () => {
    render(github);
    const svg = screen.getByTestId(TestId.HeaderIcon);

    expect(svg).toBeInTheDocument();
  });
});
