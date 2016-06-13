const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const loaders = require('./webpack.loaders');

module.exports = {
    entry: { application: ['./src/index.js'] },
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].[hash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html', inject: 'body' }),
        new CopyWebpackPlugin([{
            from: './src/assets/favicon.ico',
            to: 'assets'
        }])
    ],
    module: loaders
};
