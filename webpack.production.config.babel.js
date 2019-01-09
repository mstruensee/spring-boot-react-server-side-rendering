/*global __dirname*/
import path from "path"
import webpack from "webpack"
import autoprefixer from "autoprefixer"
import ExtractTextPlugin from "extract-text-webpack-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"

export default {
    entry: {
        server: "./src/main/react/software/wecreate/hadouken/server.js",
        client: "./src/main/react/software/wecreate/hadouken/client.js"
    },
    output: {
        path: path.join(__dirname, "src/main/resources/public"),
        filename: "/[name].js"
    },
    resolve: {
        extensions: ["", ".js", ".css"],
        alias: {
            "styles": __dirname + "/src/main/react/software/wecreate/hadouken/styles",
            "components": __dirname + "/app/scripts/components",
            "images": __dirname + "/src/main/react/software/wecreate/hadouken/images"
        }
    },
    module: {
        loaders: [
            { test: /\.(css|scss)$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader") },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.(gif|png|jpg)$/, loader: "file-loader?name=images/[name].[ext]&mimeType=image/[ext]&limit=100000" },
            { test: /\.(woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: "url-loader?limit=100000" }
        ]
    },
    postcss: [autoprefixer({ browsers: ["last 5 versions"] })],
    sassLoader: { precision: 8 },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: true }
        }),
        new ExtractTextPlugin("/[name].css"),
        new HtmlWebpackPlugin({
            hash: true,
            template: "src/main/react/software/wecreate/hadouken/index.html",
            filename: "index.html",
            minify: {
                collapseWhitespace: true
            },
            excludeChunks: ["server"]
        })
    ]
}