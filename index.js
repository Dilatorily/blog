require('babel-register'); // eslint-disable-line import/no-extraneous-dependencies
const { isDevelopment, isTest } = require('./configuration');
const { setupNodeWebpack } = require('./node-webpack');
const configuration = require('./webpack.config');

setupNodeWebpack(Object.assign({}, configuration, { plugins: [] }));
if (isDevelopment) {
  require('./src/server').default(); // eslint-disable-line global-require
} else if (isTest) {
  require('./tests').default(); // eslint-disable-line global-require
}
