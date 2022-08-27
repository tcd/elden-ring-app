import Color from "color"

import { addTransparency } from "./add-transparency"

export type GradientStop = [string, number]

const GradientDirections = <const>{
    "to top":           "0deg",
    "to top right":     "45deg",
    "to right":         "90deg",
    "to bottom right": "135deg",
    "to bottom":       "180deg",
    "to left":         "270deg",
    "to bottom left":  "225deg",
    "to top left":     "315deg",
}
type GradientDirectionsKey = keyof typeof GradientDirections
type GradientDirectionsValue = typeof GradientDirections[GradientDirectionsKey]
type GradientDirection = GradientDirectionsKey | GradientDirectionsValue

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
export const linearGradient = (direction: GradientDirection, color: string, colorStops: GradientStop[]) => {

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
