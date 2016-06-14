const winston = require('winston');

const {
    isDevelopment,
    maxAge,
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

    const app = new WebpackDevServer(webpack(configuration), { hot: true });
    app.listen(port, listen(port));
} else {
    const express = require('express');
    const helmet = require('helmet');
    const https = require('https');

    const app = express();
    const secureApp = express();
    const httpsApp = https.createServer(pems, secureApp);

    app.use((req, res) => {
        res.redirect(`https://${ req.headers.host }${ req.path }`);
    });
    app.listen(port, listen(port));

    secureApp.use(helmet.hsts({
        maxAge,
        includeSubdomains: true,
        force: true
    }));
    secureApp.use(express.static(configuration.output.path));
    httpsApp.listen(httpsPort, listen(httpsPort));
}
