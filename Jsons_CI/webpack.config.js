var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = [{
  context: __dirname,
  entry: 'index.js',
  resolve: {
    extensions: ['.json'],
    modules: [__dirname, './']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  },
  plugins: [
    new CopyWebpackPlugin(
      [{
        from: '**/*.json',
        to: './actions'
      }],
      {
        ignore: [
          'build/**/*',
          'package.json',
          'node_modules/**/*'
        ],
        copyUnmodified: true
      })
  ]
}];