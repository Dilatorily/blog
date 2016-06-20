const fs = require('fs');

const DEFAULT_PORT = 80;
const DEFAULT_HTTPS_PORT = 443;
const ONE_MONTH = 2592000000;
const ONE_YEAR = 31536000000;
const DEFAULT_KEY_PEM = 'key.pem';
const DEFAULT_CERT_PEM = 'cert.pem';

module.exports = {
    isDevelopment: process.env.NODE_ENV === 'development',
    isTest: process.env.NODE_ENV === 'test',
    httpsMaxAge: ONE_YEAR,
    cacheMaxAge: ONE_MONTH,
    port: process.env.PORT || DEFAULT_PORT,
    httpsPort: process.env.HTTPS_PORT || DEFAULT_HTTPS_PORT,
    pems: {
        key: fs.readFileSync(process.env.KEY_PEM || DEFAULT_KEY_PEM),
        cert: fs.readFileSync(process.env.CERT_PEM || DEFAULT_CERT_PEM)
    }
};
