const path = require('path');
const gulp = require('gulp');
const gutil = require('gulp-util');
const nodemon = require('gulp-nodemon');
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

gulp.task('test-server', (done) => {
  nodemon({
    script: 'index.js',
    ext: 'js html',
    ignore: ['**/*.js'],
    env: {
      NODE_ENV: 'development'
    }
  });

  setTimeout(() => { done(); }, 500);
});

gulp.task('generate', ['es6Pipeline:build:release']);
gulp.task('run-release', ['es6Pipeline:build:release', 'test-server']);
gulp.task('run-dev', ['es6Pipeline:build:dev', 'test-server']);
gulp.task('default', ['es6Pipeline:watch', 'test-server']);
