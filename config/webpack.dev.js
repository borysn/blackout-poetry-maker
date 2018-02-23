const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';

module.exports = webpackMerge(commonConfig, {
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }, {
        test: /\.html$/,
        exclude: /node_modules/,
        use: ['html-loader']
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['url-loader']
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ],

  devServer: {
    contentBase: './build',
    hot: true
  }
});
