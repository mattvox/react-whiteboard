/*eslint-disable*/

var webpack = require('webpack');

module.exports = {
  entry: [
    './js/index.js'
  ],
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  // resolve: {
  //   root: __dirname,
  //   extensions: ['', '.js', '.jsx']
  // },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public/'
  },
  devtool: 'inline-source-map'
};
