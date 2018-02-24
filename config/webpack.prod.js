const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin('assets/css/style.css');
const extractCss = new ExtractTextPlugin('assets/css/[name].css');
const extractFonts = new ExtractTextPlugin('assets/fonts/[name].[ext]');

module.exports = webpackMerge(commonConfig, {
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader?sourceMap']
        })
      },
      {
        test: /\.woff(2)?$/,
        exclude: /node_modules/,
        use: extractFonts.extract({
          loader: 'file-loader',
          options: {
            name: 'assets/fonts/[name].[ext]'
          }
        })
      }
    ]
  },

  plugins: [
    extractSass,
    extractCss,
    extractFonts,
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
});
