import { render, screen } from '@testing-library/react';
import React from 'react';
import { TestId } from '../../constants';
import Header from './Header';

jest.mock('./Avatar.jpg', () => ({ __esModule: true, default: 'Avatar.jpg' }));

describe('Header', () => {
  const header = <Header />;

  it('renders my avatar', () => {
    render(header);
    const avatar = screen.getByTestId(TestId.HeaderAvatar);

    expect(avatar).toBeInTheDocument();
  });

  it('renders my information', () => {
    render(header);
    const information = screen.getByTestId(TestId.HeaderText);

    expect(information).toBeInTheDocument();
  });
});
