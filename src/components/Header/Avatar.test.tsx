import { render, screen } from '@testing-library/react';
import React from 'react';
import Avatar from './Avatar';

jest.mock('./Avatar.jpg', () => ({ __esModule: true, default: 'Avatar.jpg' }));

describe('Avatar component', () => {
  const avatar = <Avatar />;

  it('renders an anchor tag', () => {
    render(avatar);
    const link = screen.getByRole('link');

    expect(link).toBeInTheDocument();
  });

  it('renders a link to the home page', () => {
    render(avatar);
    const link = screen.getByRole('link');

    expect(link).toHaveAttribute('href', '/');
  });

  it('renders an image tag', () => {
    render(avatar);
    const image = screen.getByRole('img');

    expect(image).toBeInTheDocument();
  });
});
