var gulp = require('gulp');
var gutil = require('gulp-util');
var nodemon = require('gulp-nodemon');
var webpack = require('gulp-webpack-build');
var path = require('path');
var del = require('del');
var webpackConfigPath = './webpack.config.js';

gulp.task('default', ['clean', 'nodemon:app', 'build-cli-dev']);

gulp.task('clean', function (cb) {
    del(['build'], cb);
});

gulp.task('nodemon:app', ['clean'], function () {
    nodemon({
      script: './start.js',
      ignore: ['build/**'],
      ext: 'js'
    });
});

gulp.task('webpack:dev', ['clean'], function() {
    gulp.src(path.resolve(webpackConfigPath))
        .pipe(webpack.run());
});


gulp.task('build-cli-dev', ['webpack:dev'], function() {
    gulp.watch(['stores/**/*.js', 'components/**/*.js'], ['webpack:dev']);
});
