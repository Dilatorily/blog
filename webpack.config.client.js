const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const WebpackDashboardPlugin = require('webpack-dashboard/plugin');

const { isDevelopment, port } = require('./configuration');

const baseEntry = [
  'babel-polyfill',
  'normalize.css',
  'raleway-webfont/raleway.css',
  'roboto-mono-webfont/roboto-mono.css',
  './src/shared/assets/avatar.jpg',
  './src/shared/assets/images',
  './src/client/index.jsx',
];
const devEntry = [
  'react-hot-loader/patch',
  `webpack-dev-server/client?http://localhost:${port}`,
  'webpack/hot/only-dev-server',
];
const entry = isDevelopment ? devEntry.concat(baseEntry) : baseEntry;

const basePlugins = [
  new webpack.EnvironmentPlugin(['NODE_ENV']),
  new CopyWebpackPlugin([{ from: 'src/shared/assets/favicon' }]),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/shared/index.html',
    inject: 'body',
    minify: { collapseWhitespace: true },
  }),
  new ExtractTextWebpackPlugin('[name].[hash].css'),
  new StyleExtHtmlWebpackPlugin({ minify: true }),
];
const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new WebpackDashboardPlugin(),
];
const prodPlugins = [
  new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
  new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
  new OfflinePlugin({
    publicPath: '/',
    relativePaths: false,
    AppCache: false,
  }),
];
const plugins = basePlugins.concat(isDevelopment ? devPlugins : prodPlugins);

module.exports = {
  entry,
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].[hash].js',
  },
  devtool: isDevelopment ? 'eval-source-map' : false,
  resolve: { extensions: ['.js', '.jsx'] },
  plugins,
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'eslint-loader', enforce: 'pre' },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, options: { babelrc: false, presets: [['env', { modules: false }], 'stage-0', 'react'], plugins: ['react-hot-loader/babel'] } },
      { test: /\.css$/, use: ExtractTextWebpackPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
      { test: /\.md$/, use: [{ loader: 'raw-loader' }, { loader: 'remarkable-loader', options: { html: true } }] },
      { test: /\.(jpe?g|png)$/, use: [{ loader: 'file-loader', options: { name: 'assets/[name].[ext]' } }, { loader: 'image-webpack-loader', options: { mozjpeg: { quality: 80 } } }], include: /assets/ },
      { test: /\.(woff2?|ttf|eot|svg)(\?.*)?$/, loader: 'url-loader', options: { limit: 10000 } },
    ],
  },
  devServer: {
    port,
    compress: true,
    hot: true,
    historyApiFallback: true,
  },
};
