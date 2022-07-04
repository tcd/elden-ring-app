/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const dotEnv = require("dotenv-webpack")

const rootFolder = path.resolve(__dirname, "..")

/**
 * See [Webpack Configuration docs](https://webpack.js.org/configuration/) for more information.
 *
 * @type {import("webpack").Configuration}
 */
const webpackConfig = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(rootFolder, "dist"),
        publicPath: "/",
        filename: "bundle.js",
    },
    devtool: "inline-source-map",
    /** @type {import("webpack").Configuration} */
    devServer: {
        static: [
            {
                directory: path.join(rootFolder, "dist"),
            },
            {
                directory: path.join(rootFolder, "../etc/assets"),
                publicPath: "/public",
            },
        ],
        historyApiFallback: true,
        port: 8080,
        allowedHosts: "all",
        hot: true,
    },
    plugins: [
        new dotEnv(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            hash: true,
            inject: true,
        }),
        new webpack.ProvidePlugin({ process: "process/browser" }),
    ],
    resolve: {
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
        modules: [rootFolder, "src", "node_modules"],
        fallback: {
            console: false,
        },
        plugins: [
            new TsconfigPathsPlugin(),
        ],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/i,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                enforce: "pre",
                test: /\.tsx?$/,
                use: "source-map-loader",
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                type: "asset/resource",
                generator: {
                    filename: "fonts/[name][ext][query]",
                },
                // use: [{
                //     loader: "file-loader",
                //     options: {
                //         name: "[name].[ext]",
                //         outputPath: "fonts/",
                //     },
                // }],
            },
            {
                test: /\.png/,
                type: "asset/resource",
            },
        ],
    },
}

module.exports = webpackConfig
