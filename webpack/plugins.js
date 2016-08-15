const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies, max-len
const HtmlPlugin = require('html-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies, max-len
const { isDevelopment, isTest } = require('../configuration');


const basePlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      CLIENT: JSON.stringify(true),
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }),
  new ExtractTextPlugin('[name].[hash].css'),
  new HtmlPlugin({
    filename: isDevelopment ? 'index.html' : '../src/server/index.html',
    template: 'src/server/components/index.jsx',
    favicon: 'src/shared/assets/favicon.ico',
  }),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  new webpack.NoErrorsPlugin(),
];
const testPlugins = [
  new webpack.DefinePlugin({
    'process.env.CLIENT': JSON.stringify(true),
  }),
];
const developmentPlugins = [new webpack.HotModuleReplacementPlugin()];
const productionPlugins = [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
];

module.exports = isTest ?
  testPlugins :
  basePlugins.concat(isDevelopment ? developmentPlugins : productionPlugins);
