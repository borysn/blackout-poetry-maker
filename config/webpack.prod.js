const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin('css/style.css');
const extractCss = new ExtractTextPlugin('css/[name].[ext]');
const extractFonts = new ExtractTextPlugin('fonts/[name].[ext]');

const ENV = process.env.ENV = process.env.NODE_ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader?sourceMap']
        })
      },
      {
        test: /\.css$/,
        use: extractCss.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.woff(2)?$/,
        use: extractFonts.extract({
          loader: 'file-loader',
          options: {
            name: './fonts/[name].[ext]',
            publicPath: '/'
          }
        })
      }
    ]
  },

  plugins: [
    extractSass,
    extractCss,
    extractFonts
  ],
});
