const { isTest } = require('../configuration');

const preJsx = {
    test: /\.jsx?$/,
    loaders: ['source-map', 'eslint'],
    exclude: /node_modules/
};

const preTestJsx = {
    test: /\.jsx?$/,
    loader: 'isparta',
    exclude: /(node_modules|__tests__|webpack\.tests\.js)/
};

const jsx = {
    test: /\.jsx?$/,
    loader: 'babel',
    exclude: /node_modules/
};

const css = {
    test: /\.css$/,
    loaders: ['style', 'css']
};

const json = {
    test: /\.json$/,
    loader: 'json'
};

module.exports = {
    preLoaders: isTest ? [preTestJsx] : [preJsx],
    loaders: [jsx, css, json]
};
