/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")

const ROOT_FOLDER = path.resolve(__dirname, "..", "..")
const ENV_FOLDER = path.resolve(__dirname, "..", "env")

module.exports = {
    ROOT_FOLDER,
    ENV_FOLDER,
}
