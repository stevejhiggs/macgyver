// gulp
var gulp = require('gulp');

// plugins
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var reactify = require('reactify');

var production = process.env.NODE_ENV === 'production';

gulp.task('browserify', function () {
    var bundler = browserify('./src/main.js', {basedir: __dirname, debug: !production});
    bundler.transform(reactify);
    var stream = bundler.bundle();
    return stream
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function() {
    gulp.watch(['./src/react_components/**/*.jsx', './src/**/*.js'], ['browserify']);
});

// Just running the two tasks
gulp.task('default', ['browserify', 'watch']);