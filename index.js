require('babel-register'); // eslint-disable-line import/no-extraneous-dependencies
const { setupNodeWebpack } = require('./node-webpack');
const configuration = require('./webpack.config');

setupNodeWebpack(Object.assign({}, configuration, { plugins: [] }));
require('./src/server').default();
