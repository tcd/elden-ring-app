/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")
const dotEnv = require("dotenv-webpack")

const shared = require("./webpack.config.shared")
const { ROOT_FOLDER } = require("./helpers")

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
                directory: path.join(ROOT_FOLDER, "dist"),
            },
            {
                directory: path.join(ROOT_FOLDER, "../etc/assets"),
                publicPath: "/public",
            },
        ],
        historyApiFallback: true,
        port: 8080,
        allowedHosts: "all",
        hot: true,
    },
    plugins: [
        ...shared.plugins,
        new dotEnv({
            path: path.resolve(ROOT_FOLDER, ".env.dev"),
        }),
    ],
}

module.exports = webpackConfig
