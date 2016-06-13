const js = {
    test: /\.js$/,
    loader: 'babel',
    exclude: /node_modules/
};

module.exports = { loaders: [js] };
