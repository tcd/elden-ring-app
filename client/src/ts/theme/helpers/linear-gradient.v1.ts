import Color from "color"

import type { Css } from "@app/types"
import { addTransparency } from "./add-transparency"

/**
 * Generates a linear gradient.
 *
 * Original code by [Kitty Giraudel](https://www.sitepoint.com/building-linear-gradient-mixin-sass/).
 *
 * ## Reference
 *
 * - [MDN - `linear-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)
 * - [spec](https://drafts.csswg.org/css-images/#linear-gradients)
 *
 * @param direction
 * @param color
 * @param colorStops
 */
export const linearGradient = (direction: Css.Direction, color: string, colorStops: [string, number][]) => {

    const cleanColor = Color(color).alpha(1.0)

    const stops = []

    for (const [percentage, transparency] of colorStops) {
        // Adjust transparency
        const currentColor = addTransparency(cleanColor, transparency)
        // Assign percentage
        const currentStop = `${currentColor} ${percentage}`
        // Add to list
        stops.push(currentStop)
    }

    return `linear-gradient(${direction}, ${stops.join(", ")})`
}
