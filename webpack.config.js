'use strict';

const webpack = require('webpack');

module.exports = {
  context: './frontend',
  entry: './app',

  output: {
    path: __dirname + '/public',
    publicPath: '/',
    filename: 'app.js',
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: __dirname + './frontend',
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      }
    ],
    noParse: /angular\/angular.js/
  }

};
