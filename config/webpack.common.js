const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js',
    'react-hot-loader/patch',
    './src/assets/css/palanquin-font.css',
    './src/sass/style.scss'
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
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{loader: 'babel-loader', options: {sourceMap: true}}]
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: ['html-loader']
      }
    ]
  },

  devtool: 'source-map',

  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};
