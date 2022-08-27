import Color from "color"

import type { Css } from "@app/types"
import { addTransparency } from "./add-transparency"

// export type GradientStop = [string, number]
export interface GradientStop {
    percentage: Integer | `${number}%` | `${number}.${number}%`
    /**
     * Inclusive value between `1.00` and `0.00`
     */
    transparency: Decimal
    /** optional */
    color?: string
}

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
export const linearGradient = (direction: Css.Direction, color: string, colorStops: GradientStop[]) => {

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

    return `linear-gradient(${direction}, ${stops.join(", ")})`
}
