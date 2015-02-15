// gulp
var gulp = require('gulp');
var gutil = require('gulp-util');

// plugins
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var uglify = require('gulp-uglify');
var to5ify = require("6to5ify");
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var nodemon = require('gulp-nodemon')

var production = process.env.NODE_ENV === 'production';

gulp.task('browserify', function () {
    browserify('./src/main.jsx', {basedir: __dirname, debug: !production})
        .transform(to5ify)
        .require('./node_modules/react/react.js', { expose: 'react'}) //expose this to make sure the dev tools work
        .bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public/generated/js'));
});

gulp.task('scss', function() {
    gulp.src('./src/styles/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./public/generated/styles'));
});

gulp.task('develop', function () {
    nodemon({ script: 'server.js', ext: 'js', ignore: ['**/public/**/*.*'] })
        .on('restart', function () {
            console.log('restarting server')
        });
})

gulp.task('watch', function() {
    gulp.watch(['./src/**/*.jsx', './src/**/*.js'], ['browserify']);
    gulp.watch(['./src/styles/**/*.scss'], ['scss']);
});

// Just running the two tasks
gulp.task('generate', ['browserify', 'scss']);
gulp.task('default', ['generate', 'watch', 'develop']);