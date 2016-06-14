const preJsx = {
    test: /\.jsx?$/,
    loaders: ['source-map', 'eslint'],
    exclude: /node_modules/
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

module.exports = {
    preLoaders: [preJsx],
    loaders: [jsx, css]
};
