const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{loader: 'babel-loader', options: {sourceMap: true}}]
      },
      {
        test: /\.scss$/,
        use: [{loader: 'style-loader'},
              {loader: 'css-loader', options: {sourceMap: true}},
              {loader: 'sass-loader', options: {sourceMap: true}}
        ]
      },
      {
        test: /\.css$/,
        use: [{loader: 'style-loader'},
              {loader: 'css-loader', options: {sourceMap: true}}
        ]
      },
      {
        test: /\.woff(2)?$/,
        use: [{loader: 'file-loader', options: {name: 'assets/fonts/[name].[ext]'}}]
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],

  devtool: 'source-map',

  devServer: {
    contentBase: './build',
    hot: true
  }
});
