const { isDevelopment } = require('../configuration');

const baseEntry = ['babel-polyfill', './src/client/index.jsx'];
const developmentEntry = ['react-hot-loader/patch', 'webpack-hot-middleware/client'];

module.exports = isDevelopment ? developmentEntry.concat(baseEntry) : baseEntry;
