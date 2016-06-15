const path = require('path');
const webpack = require('webpack');

const { isDevelopment } = require('../configuration');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackSplitByPath = require('webpack-split-by-path');

const basePlugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        __DEV__: isDevelopment
    }),
    new WebpackSplitByPath([{
        name: 'vendor',
        path: [path.join(__dirname, '../node_modules')]
    }]),
    new HtmlWebpackPlugin({ template: './src/index.html', inject: 'body' }),
    new CopyWebpackPlugin([{
        from: './src/assets/favicon.ico',
        to: 'assets'
    }]),
    new webpack.NoErrorsPlugin()
];
const developmentPlugins = [new webpack.HotModuleReplacementPlugin()];
const productionPlugins = [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
];

module.exports = basePlugins.concat(isDevelopment ?
    developmentPlugins :
    productionPlugins
);
