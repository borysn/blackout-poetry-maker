const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin('css/style.css');
const extractCss = new ExtractTextPlugin('css/[name].[ext]');
const extractFonts = new ExtractTextPlugin('fonts/[name].[ext]');

module.exports = {
  entry: [
    './src/index.js',
    'react-hot-loader/patch'
  ],

  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'blackout-poetry-maker.js'
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
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: extractSass.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader?sourceMap']
        })
      }, {
        test: /\.css$/,
        use: extractCss.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      }, {
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

  resolve: {
    extensions: ['*', '.js', '.jsx', '.woff', '.woff2', '.css', '.scss']
  },

  plugins: [
    extractSass,
    extractCss,
    extractFonts,
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
};
