var gulp = require('gulp');
var gutil = require('gulp-util');
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config');

gulp.task('webpack-dev-server', function(callback) {
  var server = new WebpackDevServer(webpack(config), {
    publicPath: '/build/',
    contentBase: 'build',
    hot: true,
    inline: true,
    noInfo: true,
    quiet: true,
    stats: { colors: true }
  });

  server.listen(8080, "localhost", function() {});

  gutil.log('[webpack-dev-server]',
    'http://localhost:8080/webpack-dev-server/build/index.html');

  callback();
});

gulp.task('webpack', function (callback) {
  webpack(config, function (err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }

    gutil.log('[webpack]', stats.toString({
      colors: true
    }));
  });
});

gulp.task('dev', [
  'webpack-dev-server',
  'webpack'
]);

gulp.task('default', ['dev']);
