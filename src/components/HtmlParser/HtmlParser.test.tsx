import { render, screen } from '@testing-library/react';
import React from 'react';
import HtmlParser from './HtmlParser';

describe('HtmlParser component', () => {
  const parser = <HtmlParser>{'<button type="submit">Hello World!</button>'}</HtmlParser>;

  it('parses the children prop to JSX elements', () => {
    render(parser);
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Hello World!');
  });
});
