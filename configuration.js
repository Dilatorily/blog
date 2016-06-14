const DEFAULT_PORT = 80;

module.exports = {
    isDevelopment: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || DEFAULT_PORT
};
