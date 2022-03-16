import { render, screen } from '@testing-library/react';
import React from 'react';
import SkipToMain from './SkipToMain';

describe('SkipToMain component', () => {
  it('renders an anchor tag', () => {
    render(<SkipToMain />);
    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });

  it('redirects to the main tag', () => {
    render(<SkipToMain />);
    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', '#main');
  });
});
