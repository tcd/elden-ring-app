import Color from "color"

import type { Css } from "@app/types"
import { addTransparency } from "./add-transparency"

export interface GradientStopsOptions {
    color?: string
    stops: Css.ColorStop[]
}

/**
 * Generates color stops a CSS gradient.
 *
 * Original code by [Kitty Giraudel](https://www.sitepoint.com/building-linear-gradient-mixin-sass/).
 *
 * ## Reference
 *
 * - [MDN - `linear-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)
 * - [spec](https://drafts.csswg.org/css-images/#linear-gradients)
 */
export const gradientStops = (options: GradientStopsOptions): string => {

    const { color, stops } = options

    const colorStops = []

    const cleanColor = Color(color).alpha(1.0)

    for (const stop of stops) {
        const { percentage, transparency } = stop
        const baseColor = stop?.color ? Color(stop.color).alpha(1.0) : cleanColor

        // Adjust transparency
        const currentColor = addTransparency(baseColor, transparency)
        // Assign percentage
        const currentStop = `${currentColor} ${percentage}`
        // Add to list
        colorStops.push(currentStop)
    }

    return colorStops.join(", ")
}
