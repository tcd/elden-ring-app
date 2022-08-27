// export type BoxShadowOptions = {
//     offsetX: string
//     offsetY: string
//     blurRadius: string
//     spreadRadius?: string
//     color: string
// }
export type BoxShadowOptions = {
    /** <offset-x> */
    x: number | string
    /** <offset-y> */
    y: number | string
    /** <blur-radius> */
    blur: number | string
    /**
     * `<spread-radius>`
     *
     * Positive values will cause the shadow to expand and grow bigger,
     * negative values will cause the shadow to shrink.
     *
     * If not specified, it will be 0 (the shadow will be the same size as the element).
     */
    spread?: number | string
    color: string
}

const defaults: Partial<BoxShadowOptions> = {
    blur: "0px",
    spread: "0px",
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
