const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js',
    'react-hot-loader/patch'
  ],

  output: {
    path: path.resolve('build'),
    publicPath: '/',
    filename: 'blackout-poetry-maker.js'
  },

  resolve: {
    extensions: ['*', '.js', '.jsx', '.woff', '.woff2', '.css', '.scss']
  },

  devServer: {
    contentBase: './build',
    hot: true
  }
};
