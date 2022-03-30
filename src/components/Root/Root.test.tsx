import { render, screen } from '@testing-library/react';
import React from 'react';
import { TestId } from '../../constants';
import Root from './Root';

jest.mock('./Avatar.jpg', () => ({ __esModule: true, default: 'Avatar.jpg' }));

describe('Root', () => {
  const root = <Root>Hello World!</Root>;

  it('renders a skip to main link', () => {
    render(root);
    const skipToMain = screen.getByRole('link', { name: 'Skip to main content' });

    expect(skipToMain).toBeInTheDocument();
  });

  it('renders the header', () => {
    render(root);
    const header = screen.getByTestId(TestId.Header);

    expect(header).toBeInTheDocument();
  });

  it('renders the main content', () => {
    render(root);
    const main = screen.getByRole('main');

    expect(main).toBeInTheDocument();
  });

  it('passes the children prop to the main tag', () => {
    render(root);
    const main = screen.getByRole('main');

    expect(main).toHaveTextContent('Hello World');
  });
});
