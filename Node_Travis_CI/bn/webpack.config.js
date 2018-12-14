var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [{
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  },
  context: path.join(__dirname),
  entry: 'index',
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'views/bn.bundle.[chunkhash].js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader?-svgo' },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
}];
