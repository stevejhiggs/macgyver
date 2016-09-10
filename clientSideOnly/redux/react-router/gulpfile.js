const path = require('path');
const gulp = require('gulp');
const gutil = require('gulp-util');
const gls = require('gulp-live-server');
const es6Pipeline = require('gulp-webpack-es6-pipeline');

es6Pipeline.registerBuildGulpTasks(
  gulp,
  {
    entryPoints: {
      'bundle': path.join(__dirname,'/src/index.jsx')
    },
    outputDir: path.join(__dirname, 'public/generated/js')
  }
);

gulp.task('test-server', () => {
    var server = gls.static('public', 8888);
    server.start();
});

gulp.task('generate', ['es6Pipeline:build:release']);
gulp.task('run-release', ['es6Pipeline:build:release', 'test-server']);
gulp.task('run-dev', ['es6Pipeline:build:dev', 'test-server']);
gulp.task('default', ['es6Pipeline:watch', 'test-server']);
