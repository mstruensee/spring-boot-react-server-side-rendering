/* global __dirname */
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const AssetsPlugin = require("assets-webpack-plugin")
const path = require("path")
const buildDir = "src/main/resources/public"

module.exports = {
    entry: {
        server: "./src/main/react/software/wecreate/hadouken/server.js",
        client: "./src/main/react/software/wecreate/hadouken/client.js"
    },
    output: {
        path: path.join(__dirname, buildDir),
        filename: "[name].js"
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(buildDir, {}),
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new AssetsPlugin({
            prettyPrint: true,
            path: path.join(__dirname, buildDir)
        }),
        new HtmlWebpackPlugin({
            template: "src/main/react/software/wecreate/hadouken/index.html",
            filename: "index.html",
            excludeChunks: ["server"]
        })
    ]
}