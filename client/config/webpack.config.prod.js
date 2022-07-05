/* eslint-disable @typescript-eslint/no-var-requires */

const shared = require("./webpack.config.shared")

/**
 * See [Webpack Configuration docs](https://webpack.js.org/configuration/) for more information.
 *
 * @type {import("webpack").Configuration}
 */
const webpackConfig = {
    ...shared,
    mode: "production",
}

module.exports = webpackConfig
