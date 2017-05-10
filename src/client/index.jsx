import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { StyleRoot } from 'radium';

import getPosts from '../shared/assets/posts';
import App from '../shared/components/App';

(async () => {
  if (process.env.NODE_ENV === 'production') {
    const OfflinePluginRuntime = await import('offline-plugin/runtime');
    OfflinePluginRuntime.install();
  }

  const posts = await getPosts();

  const root = document.getElementById('root');
  const renderComponent = (Component, props) => {
    render(
      <AppContainer>
        <StyleRoot>
          <BrowserRouter>
            <Component {...props} />
          </BrowserRouter>
        </StyleRoot>
      </AppContainer>,
      root,
    );
  };

  renderComponent(App, { posts });
  if (module.hot) {
    module.hot.accept('../shared/components/App', () => renderComponent(App, { posts }));
  }
})();
