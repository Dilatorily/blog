import express from 'express'; // eslint-disable-line import/no-extraneous-dependencies
import webpack from 'webpack'; // eslint-disable-line import/no-extraneous-dependencies
import fallback from 'connect-history-api-fallback'; // eslint-disable-line import/no-extraneous-dependencies, max-len
import webpackDevMiddleware from 'webpack-dev-middleware'; // eslint-disable-line import/no-extraneous-dependencies, max-len
import webpackHotMiddleware from 'webpack-hot-middleware'; // eslint-disable-line import/no-extraneous-dependencies, max-len
import Dashboard from 'webpack-dashboard'; // eslint-disable-line import/no-extraneous-dependencies
import DashboardPlugin from 'webpack-dashboard/plugin'; // eslint-disable-line import/no-extraneous-dependencies, max-len

import { port } from '../../configuration';
import configuration from '../../webpack.config';
import listen from './listen';

export default () => {
  const app = express();
  const compiler = webpack(configuration);
  const dashboard = new Dashboard();
  compiler.apply(new DashboardPlugin(dashboard.setData));
  app.use(fallback());
  app.use(webpackDevMiddleware(compiler, {
    quiet: true,
    publicPath: configuration.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler, { log: () => {} }));
  app.listen(port, listen(port));
};
