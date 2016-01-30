var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: './src/client.js',
    output: {
        path: path.join(__dirname, 'public/generated/js'),
        publicPath: "generated/js",
        filename: 'client.js'
    },
    module: {
        preLoaders: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              loader: require.resolve('eslint-loader')
            }
        ],
        loaders: [
            {
              test: /\.css$/,
              loader: 'style!css'
            },
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              loader: require.resolve('babel-loader'),
              query: {
                presets: ['es2015', 'react']
              }
            }
        ]
    },
    plugins: [
        // Protects against multiple React installs when npm linking
        new webpack.NormalModuleReplacementPlugin(/^react?$/, require.resolve('react')),
        new webpack.NormalModuleReplacementPlugin(/^react(\/addons)?$/, require.resolve('react/addons'))
    ]
};
