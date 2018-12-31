import path from 'path';
import webpack from 'webpack';
import { isDevelopment } from './configuration';

const baseEntry = ['@babel/polyfill', './src/server/index.jsx'];
const developmentEntry = [];
const productionEntry = [];
const entry = [...(isDevelopment ? developmentEntry : productionEntry), ...baseEntry];

const basePlugins = [];
const developmentPlugins = [];
const productionPlugins = [new webpack.LoaderOptionsPlugin({ minimize: true, debug: false })];
const plugins = [...basePlugins, ...(isDevelopment ? developmentPlugins : productionPlugins)];

export default {
  mode: isDevelopment ? 'development' : 'production',
  entry,
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js',
  },
  devtool: false,
  target: 'node',
  node: { __dirname: true },
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
          presets: [['@babel/preset-env', { targets: { node: '10' } }], '@babel/preset-react'],
          plugins: [
            'emotion',
            '@babel/plugin-syntax-dynamic-import',
            ['@babel/plugin-proposal-class-properties', { loose: false }],
          ],
        },
      },
      { test: /\.css$/, use: 'css-loader' },
      { test: /\.md$/, use: [{ loader: 'raw-loader' }, { loader: 'markdown-loader' }] },
      { test: /\.(jpe?g|png)$/, use: [{ loader: 'file-loader', options: { name: 'assets/[name].[ext]' } }, { loader: 'image-webpack-loader', options: { mozjpeg: { quality: 80 } } }], include: /assets/ },
      { test: /\.(woff2?|ttf|eot|svg)(\?.*)?$/, loader: 'url-loader', options: { limit: 10000 } },
    ],
  },
};
