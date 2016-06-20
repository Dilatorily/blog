const path = require('path');
const { isTest } = require('../configuration');

module.exports = isTest ? undefined : {
    path: path.join(__dirname, 'public'),
    filename: '[name].[hash].js',
    sourceMapFilename: '[name].[hash].js.map'
};
