const webpack = require('./webpack.config');

module.exports = (configuration) => {
    configuration.set({
        browsers: ['PhantomJS'],
        singleRun: true,
        frameworks: ['mocha'],
        files: ['webpack.tests.js'],
        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-sinon',
            'karma-webpack',
            'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-mocha-reporter'
        ],
        preprocessors: { 'webpack.tests.js': 'webpack' },
        reporters: ['mocha', 'coverage'],
        webpack,
        webpackServer: { noInfo: true },
        port: 9876,
        colors: true,
        logLevel: configuration.LOG_INFO,
        coverageReporter: { subdir: '.' }
    });
};
