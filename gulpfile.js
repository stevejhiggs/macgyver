// gulp
var gulp = require('gulp');

// plugins
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var production = process.env.NODE_ENV === 'production';

var paths = {
    js: './src/**/*.js',
    jsx: './src/react_components/**/*.jsx',
    scss: './src/styles/**/*.scss',
    scssOutput: './public/generated/styles',
    browserifyOutput: './public/generated/js'
}

gulp.task('browserify', function () {
    var bundler = browserify('./src/main.js', {basedir: __dirname, debug: !production});
    bundler.transform(reactify);
    var stream = bundler.bundle();
    return stream
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(paths.browserifyOutput));
});

gulp.task('scss', function() {
    gulp.src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.scssOutput));
});

gulp.task('watch', function() {
    gulp.watch([paths.jsx, paths.js], ['browserify']);
    gulp.watch([paths.scss], ['scss']);
});

// Just running the two tasks
gulp.task('generate', ['browserify', 'scss']);
gulp.task('default', ['generate', 'watch']);