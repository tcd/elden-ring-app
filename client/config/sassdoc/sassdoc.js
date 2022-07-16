/* eslint-disable @typescript-eslint/no-var-requires */
var extras = require("sassdoc-extras")

module.exports = function (dest, ctx) {
    extras.markdown(ctx)
}
