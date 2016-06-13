const eslint = {
    test: /\.js$/,
    loader: 'eslint',
    exclude: /node_modules/
};

const js = {
    test: /\.js$/,
    loader: 'babel',
    exclude: /node_modules/
};

module.exports = {
    preLoaders: [eslint],
    loaders: [js]
};
