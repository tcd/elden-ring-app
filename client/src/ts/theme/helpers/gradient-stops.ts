import Color from "color"

import type { Css } from "@app/types"
import { addTransparency } from "./add-transparency"

/**
 * Generates color stops a CSS gradient.
 *
 * Original code by [Kitty Giraudel](https://www.sitepoint.com/building-linear-gradient-mixin-sass/).
 *
 * ## Reference
 *
 * - [MDN - `linear-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)
 * - [spec](https://drafts.csswg.org/css-images/#linear-gradients)
 *
 * @param color
 * @param colorStops
 */
export const gradientStops = (color: string, colorStops: Css.ColorStop[]): string => {

    const cleanColor = Color(color).alpha(1.0)

    const stops = []

    for (const stop of colorStops) {
        const { percentage, transparency } = stop
        const baseColor = stop?.color ? Color(stop.color).alpha(1.0) : cleanColor

        // Adjust transparency
        const currentColor = addTransparency(baseColor, transparency)
        // Assign percentage
        const currentStop = `${currentColor} ${percentage}`
        // Add to list
        stops.push(currentStop)
    }

    return stops.join(", ")
}
