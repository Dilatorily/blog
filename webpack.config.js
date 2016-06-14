const path = require('path');

const { isDevelopment } = require('./configuration');

const entry = require('./webpack/entry');
const plugins = require('./webpack/plugins');
const loaders = require('./webpack/loaders');

module.exports = {
    entry,
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].[hash].js',
        sourceMapFilename: '[name].[hash].js.map'
    },
    devtool: isDevelopment ? 'eval' : 'source-map',
    resolve: { extensions: ['', '.js', '.jsx'] },
    plugins,
    module: loaders
};
