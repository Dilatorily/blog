const { isDevelopment, port } = require('../configuration');

const baseApplication = ['babel-polyfill', './src/index.jsx'];
const developmentApplication = [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${ port }`,
    'webpack/hot/only-dev-server'
];
const application = isDevelopment ?
    developmentApplication.concat(baseApplication) :
    baseApplication;

module.exports = { application };
