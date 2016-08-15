const { isDevelopment } = require('./configuration');
const entry = require('./webpack/entry');
const output = require('./webpack/output');
const plugins = require('./webpack/plugins');
const loaders = require('./webpack/loaders');
const externals = require('./webpack/externals');

module.exports = {
  context: __dirname,
  entry,
  output,
  devtool: isDevelopment ? 'eval' : undefined,
  resolve: { extensions: ['', '.js', '.jsx', '.json'] },
  plugins,
  module: loaders,
  externals,
};
