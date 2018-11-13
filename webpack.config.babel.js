const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
    entry: {
        server: "./src/main/react/software/wecreate/hadouken/server.js",
        client: "./src/main/react/software/wecreate/hadouken/client.js"
    },
    output: {
        path: path.join(__dirname, "src/main/resources/public"),
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
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: "src/main/react/software/wecreate/hadouken/index.html",
            filename: "index.html",
            excludeChunks: ["server"]
        })
    ]
}