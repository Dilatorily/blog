import { render, screen } from '@testing-library/react';
import React from 'react';
import { TestId } from '../../constants';
import Information from './Information';

describe('Information', () => {
  const information = <Information />;

  it('renders my name', () => {
    render(information);
    const name = screen.getByRole('heading', { level: 4 });

    expect(name).toHaveTextContent('Huy Dang Lê-Ngô');
  });

  it('renders my title', () => {
    render(information);
    const title = screen.getByRole('heading', { level: 5 });

    expect(title).toHaveTextContent('Senior Front-End Engineer');
  });

  it('renders a link to my company', () => {
    render(information);
    const company = screen.getByRole('link', { name: 'Slack' });

    expect(company).toHaveTextContent('@Slack');
    expect(company).toHaveAttribute('href', 'https://slack.com');
  });

  it('renders my social media links', () => {
    render(information);
    const socialMedia = screen.getByTestId(TestId.HeaderSocialMedia);

    expect(socialMedia).toBeInTheDocument();
  });
});
