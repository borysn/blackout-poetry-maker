const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

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

  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }, {
        test: /\.html$/,
        exclude: /node_modules/,
        use: ['html-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};
