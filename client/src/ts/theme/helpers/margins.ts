export interface MarginsOptions {
    /** top */
    t?: string
    /** right */
    r?: string
    /** bottom */
    b?: string
    /** left */
    l?: string
    /** vertical */
    y?: string
    /** horizontal */
    x?: string
}

/**
 * Helper for CSS `margin` shorthand.
 *
 * ## See
 *
 * - [MDN - `margin`](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)
 */
export const margins = (options: MarginsOptions): string => {
    if (options?.x) {
        options.l = options.x
        options.r = options.x
    }
    if (options?.y) {
        options.t = options.x
        options.b = options.x
    }
    const { t, r, b, l } = options
    return [t, r, b, l].join(" ")
}
