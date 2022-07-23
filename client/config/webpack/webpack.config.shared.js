/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

const { ROOT_FOLDER } = require("./helpers")
const version = require("../../package.json").version

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
        path: path.resolve(ROOT_FOLDER, "dist"),
        publicPath: "/",
        // filename: "bundle.js",
        // filename: "[name].[chunkhash:8].dist.js",
        filename: "[name].dist.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(ROOT_FOLDER, "src", "index.html"),
            hash: true,
            inject: true,
        }),
        new webpack.ProvidePlugin({
            process: "process/browser",
            $:      "jquery",
            jQuery: "jquery",
        }),
        new webpack.DefinePlugin({
            "process.env.VERSION": JSON.stringify(`v${version}`),
        }),
    ],
    resolve: {
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts", ".scss"],
        modules: [ROOT_FOLDER, "src", "node_modules"],
        fallback: {
            console: false,
        },
        plugins: [
            new TsconfigPathsPlugin(),
        ],
        alias: {
            "@functions": path.join(ROOT_FOLDER, "src", "styles", "helpers", "functions", "_index.scss"),
            "@mixins":    path.join(ROOT_FOLDER, "src", "styles", "helpers", "mixins", "_index.scss"),
            "@variables": path.join(ROOT_FOLDER, "src", "styles", "_variables.scss"),
        },
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
                    {
                        // https://webpack.js.org/loaders/sass-loader/
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            // Prefer `dart-sass`
                            implementation: require.resolve("sass"),
                        },
                    },
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
