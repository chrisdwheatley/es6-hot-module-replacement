var path = require('path');
var webpack = require('webpack');

module.exports = {
  watch: true,
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    path.resolve(__dirname, 'src/index.js')
  ],

  output: {
    path: path.join(__dirname, 'build/'),
    publicPath: '/build/',
    filename: 'index.js',
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },

  resolve: {
    extensions: ['', '.js', '.css'],
    modulesDirectories: [
      'node_modules',
      path.join(__dirname, 'src')
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
