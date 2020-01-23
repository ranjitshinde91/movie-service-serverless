const webpack = require("webpack");

const path = require('path');

module.exports = {
    entry: './src/handler.ts',
    target: "node",
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.ts','.js']
    },
    output: {
        libraryTarget: "commonjs",
        filename: 'handler.js',
        path: path.resolve(__dirname, 'dist/'),
    },
    plugins : [
        new webpack.IgnorePlugin(/pg-native/)
    ],
};
