import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from './Home';

const posts = {
  '1999-12-31': '<h1>Title 1</h1><p>Paragraph 1</p>',
  '2000-01-01': '<h1>Title 2</h1><p>Paragraph 2</p>',
  '2000-02-01': '<h1>Title 3</h1><p>Paragraph 3</p>',
  '2000-02-29': '<h1>Title 4</h1><p>Paragraph 4</p>',
};

describe('Home component', () => {
  const home = <Home posts={posts} />;

  it('renders an ordered list', () => {
    render(home);
    const heading = screen.getByRole('list');

    expect(heading).toBeInTheDocument();
  });

  it('renders a list of links', () => {
    render(home);
    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(4);
  });

  it('orders the links by date in descending order', () => {
    render(home);
    const links = screen.getAllByRole('link');

    expect(links[0]).toHaveTextContent('February 29th, 2000');
    expect(links[1]).toHaveTextContent('February 1st, 2000');
    expect(links[2]).toHaveTextContent('January 1st, 2000');
    expect(links[3]).toHaveTextContent('December 31st, 1999');
  });
});
