export type ColorFormat =
    | "rgb"
    | "rgba"
    | "hsl"
    | "hsla"

export type ColorSpace =
    | "srgb"
    | "display-p3"
    | "a98-rgb"
    | "prophoto-rgb"
    | "rec-2020"

export interface ColorObject {
    type: ColorFormat;
    values: [number, number, number] | [number, number, number, number];
    colorSpace?: ColorSpace
}

/**
 * CSS color, i.e. one of:
 * - `#nnn`
 * - `#nnnnnn`
 * - `rgb()`
 * - `rgba()`
 * - `hsl()`
 * - `hsla()`
 */
export type CssColor = string
