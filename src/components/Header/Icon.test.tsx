import { render, screen } from '@testing-library/react';
import React from 'react';
import { TestId } from '../../constants';
import Icon from './Icon';

describe('Icon component', () => {
  const props = { path: 'test path', size: 24, viewBox: '0 0 512 512' };
  const icon = <Icon path={props.path} size={props.size} viewBox={props.viewBox} />;

  it('renders a SVG tag', () => {
    render(icon);
    const svg = screen.getByTestId(TestId.HeaderIcon);

    expect(svg).toBeInTheDocument();
  });

  it('passes the viewBox prop to the SVG tag', () => {
    render(icon);
    const svg = screen.getByTestId(TestId.HeaderIcon);

    expect(svg).toHaveAttribute('viewBox', props.viewBox);
  });

  it('passes the size prop to the SVG tag', () => {
    render(icon);
    const svg = screen.getByTestId(TestId.HeaderIcon);

    expect(svg).toHaveAttribute('height', `${props.size}rem`);
    expect(svg).toHaveAttribute('width', `${props.size}rem`);
  });

  it('has a default size prop', () => {
    render(<Icon path={props.path} viewBox={props.viewBox} />);
    const svg = screen.getByTestId(TestId.HeaderIcon);

    expect(svg).toHaveAttribute('height');
    expect(svg).toHaveAttribute('width');
  });

  it('renders the path', () => {
    render(icon);
    const path = screen.getByTestId(TestId.HeaderIconPath);

    expect(path).toBeInTheDocument();
    expect(path).toHaveAttribute('d', props.path);
  });
});
