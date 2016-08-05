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

const md = {
    test: /\.md$/,
    loader: 'raw'
};

const images = {
    test: /\.(jpe?g)$/,
    loaders: ['file?name=assets/[name].[ext]', 'image-webpack'],
    include: /assets/
};

const fonts = [
    {
        test: /\.woff2?(\?.*)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
    }, {
        test: /\.ttf(\?.*)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
    }, {
        test: /\.eot(\?.*)?$/,
        loader: 'file'
    }, {
        test: /\.svg(\?.*)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
    }
];

module.exports = {
    preLoaders: isTest ? [preTestJsx] : [preJsx],
    loaders: [jsx, css, json, md, images, ...fonts]
};
