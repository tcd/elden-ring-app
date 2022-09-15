export type BoxShadowOptions = {
    /**
     * `offset-x`
     *
     * @default "0px"
     */
    x: string
    /**
     * `offset-y`
     *
     * @default "0px"
     */
    y: string
    /**
     * `blur-radius`
     *
     * @default "0px"
     */
    blur?: string
    /**
     * `spread-radius`
     *
     * Positive values will cause the shadow to expand and grow bigger,
     * negative values will cause the shadow to shrink.
     *
     * If not specified, it will be 0 (the shadow will be the same size as the element).
     *
     * @default "0px"
     */
    spread?: string
    /**
     * `color`
     *
     * If not specified, it defaults to [currentcolor](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentcolor_keyword).
     *
     * @default "currentcolor"
     */
    color?: string
}

/**
 * ## See
 *
 * - [MDN - `box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
 * - [Spec](https://drafts.csswg.org/css-backgrounds/#box-shadow)
 */
export const boxShadow = (options: BoxShadowOptions): string => {
    const {
        x,
        y,
        blur,
        spread,
        color,
    } = { ...defaults, ...options }
    return [x, y, blur, spread, color].join(" ")
}

const defaults: Partial<BoxShadowOptions> = {
    x: "0px",
    y: "0px",
    blur: "0px",
    spread: "0px",
    color: "currentcolor",
}

// export type BoxShadowOptions = {
//     offsetX: string
//     offsetY: string
//     blurRadius: string
//     spreadRadius?: string
//     color: string
// }
