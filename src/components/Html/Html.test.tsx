import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Html from './Html';

describe('Html component', () => {
  const body = '<main>Hello World!</main>';
  const criticalStyles = 'main{text-align:center}';
  const view = renderToStaticMarkup(<Html critical={criticalStyles}>{body}</Html>);

  it('passes the critical styles in a style tag', () => {
    expect(view).toEqual(
      expect.stringContaining(`<style type="text/css">${criticalStyles}</style>`),
    );
  });

  it('passes the children prop in the body tag', () => {
    expect(view).toEqual(expect.stringContaining(`<body>${body}</body>`));
  });

  it('passes the stylesheet prop to the link tag', () => {
    const stylesheet = '/assets/styles.css';
    const html = renderToStaticMarkup(
      <Html critical={criticalStyles} stylesheet={stylesheet}>
        {body}
      </Html>,
    );
    expect(html).toEqual(expect.stringContaining(`<link href="${stylesheet}" rel="stylesheet"/>`));
  });
});
