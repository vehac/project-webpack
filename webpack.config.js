const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        init:'./src/index.js'
    },
    output: {
        path: path.resolve(__dirname+'/static', 'build'),
        filename: 'js/[name].min.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: "css/[name].min.css", chunkFilename: "css/[id].min.css"}),
        new webpack.ProvidePlugin({$: 'jquery', jQuery: 'jquery', 'window.$': 'jquery', 'window.jQuery': 'jquery'})
    ]
};