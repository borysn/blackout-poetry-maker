const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const extractSass = new ExtractTextPlugin('assets/css/style.css');

module.exports = webpackMerge(commonConfig, {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: {url: false, minimize: true}},
            {loader:'sass-loader'}]
        })
      }
    ]
  },

  plugins: [
    extractSass,
    new CopyWebpackPlugin([
      { from: 'src/assets/fonts', to: 'assets/fonts/', toType: 'dir'}
    ]),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
});
