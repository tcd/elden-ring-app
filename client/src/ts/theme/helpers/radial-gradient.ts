import type { Css } from "@app/types"

import { gradientStops } from "./gradient-stops"

export interface RadialGradientOptions {
    direction: string
    color?: string
    stops: Css.ColorStop[]
}

/**
 * Generates a radial gradient.
 *
 * ## See
 *
 * - [MDN - `radial-gradient`](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient#formal_syntax)
 * - [spec](https://drafts.csswg.org/css-images/#radial-gradients)
 */
export const radialGradient = (options: RadialGradientOptions) => {
    const { direction, ...rest } = options
    return `radial-gradient(${direction}, ${gradientStops({ ...rest })})`
}
