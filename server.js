'use strict';

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const configuration = require('./webpack.config');
const port = process.env.PORT || 8080;

const app = new webpackDevServer(webpack(configuration));
app.listen(port);
