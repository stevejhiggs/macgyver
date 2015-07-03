var gulp = require('gulp');
var gutil = require('gulp-util');

var webpack = require('webpack');
var nodemon = require('gulp-nodemon');

gulp.task('webpack-build', function(done) {
    webpack(require('./config/webpack.config.dev')).run(function(err, stats) {
        if(err) {
            gutil.log(gutil.colors.red('Webpack Error'), gutil.colors.red(err));
        }
        else {
            gutil.log(gutil.colors.green('Webpack Build'), gutil.colors.green(stats.toString()));
        }
        done();
    });
});

gulp.task('webpack-watch', function(done) {
    webpack(require('./config/webpack.config.dev')).watch({
        aggregateTimeout: 300 // wait so long for more changes
    }, function(err, stats) {
        if(err) {
            gutil.log(gutil.colors.red('Webpack Error'), gutil.colors.red(err));
        }
        else {
            gutil.log(gutil.colors.green('Webpack Build'), gutil.colors.green(stats.toString()));
        }
    });
});

gulp.task('dev-server', function () {
    nodemon({ script: 'src/server.js', ext: 'js,jsx', ignore: ['**/public/**/*.*'] })
        .on('restart', function () {
            console.log('restarting server');
        });
});

gulp.task('generate', ['webpack-build']);
gulp.task('default', ['webpack-watch', 'dev-server']);
