/* global __dirname */
import HtmlWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import CleanWebpackPlugin from "clean-webpack-plugin"
import AssetsPlugin from "assets-webpack-plugin"
import webpack from "webpack"
import path from "path"

const buildDir = "src/main/resources/public"

module.exports = {
    mode: "development",
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
    devtool: "eval-source-map",
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
            filename: "./index.html",
            excludeChunks: ["server"]
        }),
        new webpack.DefinePlugin({
            CLIENT_ONLY_PRELOADED_STATE: JSON.stringify({
                items: [
                    { id: 0, name: "zero", quantity: 0 },
                    { id: 1, name: "one", quantity: 1 },
                    { id: 2, name: "two", quantity: 2 },
                    { id: 3, name: "three", quantity: 3 }
                ]
            })
        })
    ]
}