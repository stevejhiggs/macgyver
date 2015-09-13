var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var gls = require('gulp-live-server');
var webpackDevServer = require('webpack-dev-server');

var webpackConfig = require('./webpack.config.js');

//create single instances of dev compiler to allow caching
var devConfig = Object.create(webpackConfig);
devConfig.devtool = 'sourcemap';
devConfig.debug = true;
var devCompiler = webpack(devConfig);

gulp.task("webpack:build-release", function (callback) {
    // modify some webpack config options
    var releaseConfig = Object.create(webpackConfig);
    releaseConfig.plugins = releaseConfig.plugins.concat(
        new webpack.DefinePlugin({
            "process.env": {
                // This has effect on the react lib size
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    );

    // run webpack
    webpack(releaseConfig, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task('webpack:build-dev', function (callback) {
    devCompiler.run(function (err, stats) {
        if (err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task('test-server', function () {
    var server = gls.static('public', 8888);
    server.start();
});

gulp.task("webpack-dev-server", function (done) {
    new webpackDevServer(webpack(webpackConfig), {
        stats: {colors: true},
        contentBase: "public",
        publicPath: "/generated/js/"
    }).listen(8001, "localhost", function (err) {
        if (err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8001/index.html");

        // keep the server alive or continue?
        //done();
    });
});

gulp.task('generate', ['webpack:build-release']);
gulp.task('run-release', ['generate', 'test-server']);
gulp.task('run-dev', ['generate', 'test-server']);
gulp.task('default', ['webpack-dev-server']);
