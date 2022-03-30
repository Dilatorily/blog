import { render, screen } from '@testing-library/react';
import React from 'react';
import { TestId } from '../../constants';
import SocialMedia from './SocialMedia';

describe('SocialMedia', () => {
  const socialMedia = <SocialMedia />;

  it('renders an ordered list tag', () => {
    render(socialMedia);
    const list = screen.getByRole('list');

    expect(list).toBeInTheDocument();
  });

  it('renders the LinkedIn component', () => {
    render(socialMedia);
    const linkedin = screen.getByTestId(TestId.HeaderLinkedIn);

    expect(linkedin).toBeInTheDocument();
  });

  it('renders the GitHub component', () => {
    render(socialMedia);
    const github = screen.getByTestId(TestId.HeaderGitHub);

    expect(github).toBeInTheDocument();
  });

  it('renders the Twitter component', () => {
    render(socialMedia);
    const twitter = screen.getByTestId(TestId.HeaderTwitter);

    expect(twitter).toBeInTheDocument();
  });
});
