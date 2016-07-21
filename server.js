const path = require('path');
const winston = require('winston');

const {
    isDevelopment,
    httpsMaxAge,
    cacheMaxAge,
    port,
    httpsPort,
    pems
} = require('./configuration');
const configuration = require('./webpack.config');

winston.cli();
const listen = (portToListen) => (error) => {
    if (error) {
        winston.error(error);
        return;
    }
    winston.info(`Listening on port ${ portToListen }`);
};

if (isDevelopment) {
    const webpack = require('webpack');
    const WebpackDevServer = require('webpack-dev-server');

    const app = new WebpackDevServer(webpack(configuration), {
        hot: true,
        historyApiFallback: true
    });
    app.listen(port, listen(port));
} else {
    const express = require('express');
    const compression = require('compression');
    const helmet = require('helmet');
    const https = require('https');

    const app = express();
    const httpsApp = https.createServer(pems, app);

    app.use(compression({ threshold: 0 }));
    app.use(helmet.hsts({
        maxAge: httpsMaxAge,
        includeSubdomains: true,
        force: true
    }));
    app.use(express.static(configuration.output.path,
        { maxAge: cacheMaxAge }
    ));
    app.get('*', (req, res) => {
        res.sendFile(path.join(configuration.output.path, 'index.html'));
    });
    httpsApp.listen(httpsPort, listen(httpsPort));
}
