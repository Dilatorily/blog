const { isDevelopment, isTest } = require('./configuration');

const entry = require('./webpack/entry');
const output = require('./webpack/output');
const plugins = require('./webpack/plugins');
const loaders = require('./webpack/loaders');

module.exports = {
    entry,
    output,
    devtool: isDevelopment ? 'eval' : '#source-map',
    resolve: { extensions: ['', '.js', '.jsx', 'json'] },
    plugins,
    module: loaders,
    externals: isTest ? {
        cheerio: 'window',
        'react/addons': true,
        'react/lib/ReactContext': true,
        'react/lib/ExecutionEnvironment': true
    } : undefined
};
