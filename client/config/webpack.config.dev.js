/* eslint-disable @typescript-eslint/no-var-requires */

const path = require("path")
const shared = require("./webpack.config.shared")
const rootFolder = path.resolve(__dirname, "..")

/**
 * See [Webpack Configuration docs](https://webpack.js.org/configuration/) for more information.
 *
 * @type {import("webpack").Configuration}
 */
const webpackConfig = {
    ...shared,
    mode: "development",
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
}

module.exports = webpackConfig
