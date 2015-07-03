var webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: './src/client.js',
    output: {
        path: './public/generated/js',
        filename: 'client.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: require.resolve('babel-loader') }
        ]
    },
    plugins: [
        // Protects against multiple React installs when npm linking
        new webpack.NormalModuleReplacementPlugin(/^react?$/, require.resolve('react')),
        new webpack.NormalModuleReplacementPlugin(/^react(\/addons)?$/, require.resolve('react/addons'))
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};
