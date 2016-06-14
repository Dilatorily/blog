const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const { isDevelopment, port } = require('./configuration');
const configuration = require('./webpack.config');

if (isDevelopment) {
    const app = new WebpackDevServer(webpack(configuration));
    app.listen(port);
}
