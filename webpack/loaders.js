const ExtractTextPlugin = require('extract-text-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies, max-len
const { isTest } = require('../configuration');

const preJsx = { test: /\.jsx?/, loaders: ['source-map', 'eslint'], exclude: /node_modules/ };
const jsx = { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ };
const css = {
  test: /\.css$/,
  loader: isTest ? undefined : ExtractTextPlugin.extract('style', 'css'),
  loaders: isTest ? ['style', 'css'] : undefined,
};
const md = [
  { test: /\.md$/, loader: 'raw' },
  { test: /\.md$/, loader: 'remarkable', query: { html: true } },
];
const images = [
  {
    test: /\.(jpe?g|png)$/,
    loader: 'file',
    query: {
      name: 'assets/[name].[ext]',
    },
    include: /assets/,
  },
  { test: /\.(jpe?g|png)$/, loader: 'image-webpack', include: /assets/ },
];
const fonts = [
  {
    test: /\.woff2?(\?.*)?$/,
    loader: 'url',
    query: {
      limit: 10000,
      mimetype: 'application/font-woff',
    },
  },
  {
    test: /\.ttf(\?.*)?$/,
    loader: 'url',
    query: {
      limit: 10000,
      mimetype: 'application/octet-stream',
    },
  },
  { test: /\.eot(\?.*)?$/, loader: 'file' },
  { test: /\.svg(\?.*)?$/, loader: 'url', query: { limit: 10000, mimetype: 'image/svg+xml' } },
];

module.exports = {
  preLoaders: isTest ? undefined : [preJsx],
  loaders: [jsx, css, ...md, ...images, ...fonts],
};
