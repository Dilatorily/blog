import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'normalize.css';
import 'raleway-webfont/raleway.css';
import 'roboto-mono-webfont/roboto-mono.css';

import '../shared/assets/images';
import { isDevelopment } from '../shared/utils';
import Root from './components/Root';

const root = document.getElementById('root');

render(
  <AppContainer>
    <Root />
  </AppContainer>,
  root
);

if (isDevelopment && module.hot) {
  module.hot.accept('./components/Root', () => {
    const NextRoot = require('./components/Root').default; // eslint-disable-line global-require

    render(
      <AppContainer>
        <NextRoot />
      </AppContainer>,
      root
    );
  });
}
