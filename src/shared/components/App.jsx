import React from 'react';
import { hot } from 'react-hot-loader';
import { injectGlobal } from 'emotion';
import normalize from 'normalize.css';
import raleway from 'raleway-webfont/raleway.css';
import roboto from 'roboto-mono-webfont/roboto-mono.css';

import PropTypes from 'prop-types';
import Container from './Container';
import Contents from './Contents';
import Header from './Header';

injectGlobal(`
  ${normalize.toString()}
  ${raleway.toString()}
  ${roboto.toString()}
`);

const App = ({ posts }) => (
  <Container>
    <Header />
    <Contents posts={posts} />
  </Container>
);

App.propTypes = {
  posts: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default hot(module)(App);
