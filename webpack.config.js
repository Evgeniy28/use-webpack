'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
  context: __dirname + '/frontend',

  entry: {
    app: './app',
  },

  output: {
    path: __dirname + '/public/js',
    publicPath: '/js/',
    filename: '[name].js',
  },

  watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: NODE_ENV == 'development' ? 'cheap-inline-module-source-map' : 'hidden-source-map',

  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ],

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js']
  },

  resolveLoader: {
    modules: ['node_modules'],
    moduleExtensions: ['-loader'],
    extensions: ['.js']
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  }

};

if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings:     false,
        drop_console: false,
        unsafe:       true
      }
    })
  );
}
