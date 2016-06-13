const eslint = {
    test: /\.jsx?$/,
    loader: 'eslint',
    exclude: /node_modules/
};

const jsx = {
    test: /\.jsx?$/,
    loader: 'babel',
    exclude: /node_modules/
};

module.exports = {
    preLoaders: [eslint],
    loaders: [jsx]
};
