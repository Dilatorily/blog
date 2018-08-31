import React from 'react';
import { render } from 'react-dom';
import Root from './Root';
import getPosts from '../shared/assets/posts';

(async () => {
  if (process.env.NODE_ENV === 'production') {
    const OfflinePluginRuntime = await import('offline-plugin/runtime');
    OfflinePluginRuntime.install();
  }

  const posts = await getPosts();
  const root = document.getElementById('root');
  render(<Root posts={posts} />, root);
})();
