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
    // entry: "./src/index.tsx",
    entry: {
        main: "./src/index.tsx",
        // kitchenSink: "./src/ts/data/kitchen-sink/kitchen-sink-data.ts",
    },
    output: {
        path: path.resolve(rootFolder, "dist"),
        publicPath: "/",
        // filename: "bundle.js",
        // filename: "[name].[chunkhash:8].dist.js",
        filename: "[name].dist.js",
    },
    plugins: [
        new dotEnv(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            hash: true,
            inject: true,
        }),
        new webpack.ProvidePlugin({
            process: "process/browser",
            $:      "jquery",
            jQuery: "jquery",
        }),
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
    optimization: {
        splitChunks: {
            cacheGroups: {
                kitchenSink: {
                    test: /[\\/]kitchen-sink[\\/]/,
                    name: "kitchenSink",
                    enforce: true,
                    chunks: "all",
                },
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    enforce: true,
                    chunks: "all",
                },
            },
        },
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
            // {
            //     test: /\.json$/,
            //     loader: "json-loader",
            // },
        ],
    },
}

module.exports = webpackConfig
