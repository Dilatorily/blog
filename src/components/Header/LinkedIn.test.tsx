import { render, screen } from '@testing-library/react';
import React from 'react';
import { TestId } from '../../constants';
import LinkedIn from './LinkedIn';

describe('LinkedIn', () => {
  const linkedin = <LinkedIn />;

  it('renders a list item tag', () => {
    render(linkedin);
    const item = screen.getByRole('listitem');

    expect(item).toBeInTheDocument();
  });

  it('renders an anchor tag', () => {
    render(linkedin);
    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });

  it('renders a link to my LinkedIn profile', () => {
    render(linkedin);
    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/dilatorily');
  });

  it('renders the LinkedIn icon as a SVG', () => {
    render(linkedin);
    const svg = screen.getByTestId(TestId.HeaderIcon);

    expect(svg).toBeInTheDocument();
  });
});
