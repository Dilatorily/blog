import express from 'express'; // eslint-disable-line import/no-extraneous-dependencies
import webpack from 'webpack'; // eslint-disable-line import/no-extraneous-dependencies
import fallback from 'connect-history-api-fallback'; // eslint-disable-line import/no-extraneous-dependencies, max-len
import webpackDevMiddleware from 'webpack-dev-middleware'; // eslint-disable-line import/no-extraneous-dependencies, max-len
import webpackHotMiddleware from 'webpack-hot-middleware'; // eslint-disable-line import/no-extraneous-dependencies, max-len

import { port } from '../../configuration';
import configuration from '../../webpack.config';
import listen from './listen';

export default () => {
  const app = express();
  const compiler = webpack(configuration);
  app.use(fallback());
  app.use(webpackDevMiddleware(compiler, { publicPath: configuration.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
  app.listen(port, listen(port));
};
