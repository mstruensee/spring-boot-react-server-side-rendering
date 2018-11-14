/* global __dirname */
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import CleanWebpackPlugin from "clean-webpack-plugin"
import AssetsPlugin from "assets-webpack-plugin"
import WebpackMd5Hash from "webpack-md5-hash"
import path from "path"

const buildDir = "src/main/resources/public"

module.exports = {
    mode: "production",
    entry: {
        server: "./src/main/react/software/wecreate/hadouken/server.js",
        client: "./src/main/react/software/wecreate/hadouken/client.js"
    },
    output: {
        path: path.join(__dirname, buildDir),
        filename: "[name].[chunkhash].js"
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
            filename: "style.[contenthash].css"
        }),
        new AssetsPlugin({
            prettyPrint: true,
            path: path.join(__dirname, buildDir)
        }),
        new HtmlWebpackPlugin({
            template: "src/main/react/software/wecreate/hadouken/index.html",
            filename: "index.html",
            minify: {
                collapseWhitespace: true
            },
            excludeChunks: ["server"]
        }),
        new WebpackMd5Hash()
    ]
}