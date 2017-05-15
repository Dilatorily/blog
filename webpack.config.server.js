const path = require('path');
const webpack = require('webpack');
const webpackNodeExternals = require('webpack-node-externals');

const { isDevelopment } = require('./configuration');

const entry = ['babel-polyfill', './src/server/index.jsx'];

const basePlugins = [
  new webpack.EnvironmentPlugin(['NODE_ENV']),
  new webpack.IgnorePlugin(/node_modules/),
];
const prodPlugins = [
  new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
  new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
];
const plugins = isDevelopment ? basePlugins : basePlugins.concat(prodPlugins);

module.exports = {
  entry,
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
  },
  devtool: false,
  target: 'node',
  externals: [webpackNodeExternals()],
  node: {
    __dirname: false,
  },
  resolve: { extensions: ['.js', '.jsx'] },
  plugins,
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'eslint-loader', enforce: 'pre' },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, options: { babelrc: false, presets: [['env', { modules: false }], 'stage-0', 'react'] } },
      { test: /\.md$/, use: [{ loader: 'raw-loader' }, { loader: 'remarkable-loader', options: { html: true } }] },
    ],
  },
};
