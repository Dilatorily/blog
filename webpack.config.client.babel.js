import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import OfflinePlugin from 'offline-plugin';
import WebpackDashboardPlugin from 'webpack-dashboard/plugin';

const { isDevelopment, port } = require('./configuration');

const baseEntry = [
  '@babel/polyfill',
  './src/shared/assets/images',
  './src/client/index.jsx',
];
const developmentEntry = [];
const productionEntry = [];
const entry = [...(isDevelopment ? developmentEntry : productionEntry), ...baseEntry];

const basePlugins = [
  new webpack.EnvironmentPlugin(['NODE_ENV']),
  new CopyWebpackPlugin([{ from: 'src/shared/assets/favicon' }]),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'src/shared/index.html',
    inject: 'body',
    minify: { collapseWhitespace: true },
  }),
];
const developmentPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new WebpackDashboardPlugin(),
];
const productionPlugins = [
  new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
  new OfflinePlugin({
    publicPath: '/',
    relativePaths: false,
    ServiceWorker: {
      events: true,
      navigateFallbackURL: '/',
      minify: true,
    },
    AppCache: false,
  }),
];
const plugins = [...basePlugins, ...(isDevelopment ? developmentPlugins : productionPlugins)];

export default {
  mode: isDevelopment ? 'development' : 'production',
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
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          babelrc: false,
          presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
          plugins: [
            'emotion',
            '@babel/plugin-syntax-dynamic-import',
            ['@babel/plugin-proposal-class-properties', { loose: false }],
          ],
        },
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.md$/, use: [{ loader: 'raw-loader' }, { loader: 'markdown-loader' }] },
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
