const path = require('path');

const plugins = require('./webpack/plugins');
const loaders = require('./webpack/loaders');

module.exports = {
    entry: { application: ['./src/index.jsx'] },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].[hash].js'
    },
    plugins,
    module: loaders
};
