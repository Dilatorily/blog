module.exports = {
  isDevelopment: process.env.NODE_ENV === 'development',
  isTest: process.env.NODE_ENV === 'test',
  httpsMaxAge: 31536000000,
  cacheMaxAge: 2592000000,
  port: process.env.PORT || 80,
  httpsPort: process.env.HTTPS_PORT || 443,
  pems: {
    key: process.env.KEY_PEM || 'key.pem',
    cert: process.env.CERT_PEM || 'cert.pem',
  },
};
