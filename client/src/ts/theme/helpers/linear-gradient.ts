import type { Css } from "@app/types"

import { gradientStops } from "./gradient-stops"

export interface LinearGradientOptions {
    direction: Css.LinearDirection
    color?: string
    stops: Css.ColorStop[]
}

/**
 * Generates a linear gradient.
 *
 * ## See
 *
 * - [MDN - `linear-gradient()`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient)
 * - [spec](https://drafts.csswg.org/css-images/#linear-gradients)
 */
export const linearGradient = ({ direction, color, stops }: LinearGradientOptions) => {
    return `linear-gradient(${direction}, ${gradientStops({ color, stops })})`
}
