const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const Clean = require('clean-webpack-plugin');
const Html = require('html-webpack-plugin');
const ExtractText = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const pkg = require('./package.json');

const dir = {
  src: path.resolve('client/src'),
  dist: path.resolve('client/dist'),
};

const styleBundle = new ExtractText(`${pkg.name}.css`);

const base = {
  context: dir.src,
  entry: 'index.js',
  resolve: {
    modules: [dir.src, 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: styleBundle.extract([
          'css-loader',
          'style-loader'
        ]),
      },
      {
        test: /\.scss$/,
        use: styleBundle.extract([
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]),
      },
    ],
  },
  plugins: [
    styleBundle,
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: () => [autoprefixer()],
      },
    }),
  ],
};

const dev = {
  devtool: 'eval-source-map',
  plugins: [new Html({ template: path.resolve('development.tpl.html') })],
};

const prod = {
  output: {
    path: dir.dist,
    filename: `${pkg.name}.min.js`,
  },
  plugins: [
    new Clean(path.resolve(dir.dist, '**', '*'), { root: dir.dist }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: { except: ['webpackJsonp'] },
    }),
  ],
};

const environments = { dev, prod };

module.exports = env => merge(base, environments[env]);
