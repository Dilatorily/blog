const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const { DEFAULT_PORT } = require('./configuration');
const configuration = require('./webpack.config');
const port = process.env.PORT || DEFAULT_PORT;

const app = new WebpackDevServer(webpack(configuration));
app.listen(port);
