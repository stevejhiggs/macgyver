const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const gls = require('gulp-live-server');
const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');

//create single instances of dev compiler to allow caching
var devConfig = Object.create(webpackConfig);
devConfig.devtool = 'sourcemap';
devConfig.debug = true;
var devCompiler = webpack(devConfig);

gulp.task("webpack:build-release", (callback) => {
    // modify some webpack config options
    var releaseConfig = Object.create(webpackConfig);
    releaseConfig.devtool = 'source-map';
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
    webpack(releaseConfig, (err, stats) => {
        if (err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task('webpack:build-dev', (callback) => {
    devCompiler.run(function (err, stats) {
        if (err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task('test-server', () => {
    var server = gls.static('public', 8888);
    server.start();
});

gulp.task("webpack-dev-server", (done) => {
    new webpackDevServer(webpack(webpackConfig), {
        stats: {colors: true},
        contentBase: "public",
        publicPath: "/generated/js/"
    }).listen(8001, "localhost", (err) => {
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