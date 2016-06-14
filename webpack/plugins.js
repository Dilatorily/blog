const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackSplitByPath = require('webpack-split-by-path');

module.exports = [
    new WebpackSplitByPath([{
        name: 'vendor',
        path: [path.join(__dirname, '../node_modules')]
    }]),
    new HtmlWebpackPlugin({ template: './src/index.html', inject: 'body' }),
    new CopyWebpackPlugin([{
        from: './src/assets/favicon.ico',
        to: 'assets'
    }])
];
