require('@babel/register');
require('@babel/polyfill');
const client = require('./webpack.config.client.babel').default;
const server = require('./webpack.config.server').default;

module.exports = [client, server];
