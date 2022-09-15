/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")
const dotEnv = require("dotenv-webpack")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const shared = require("./webpack.config.shared")
const { ENV_FOLDER } = require("./helpers")

/**
 * See [Webpack Configuration docs](https://webpack.js.org/configuration/) for more information.
 *
 * @type {import("webpack").Configuration}
 */
const webpackConfig = {
    ...shared,
    mode: "production",
    plugins: [
        ...shared.plugins,
        new dotEnv({
            path: path.resolve(ENV_FOLDER, ".env.prod"),
        }),
        new BundleAnalyzerPlugin({
            excludeAssets: "kitchenSink.dist.js"
        }),
    ],
}

module.exports = webpackConfig
