/**
 * Used by the functions below to shift a color's luminance by approximately
 * two indexes within its tonal palette.
 *
 * E.g., shift from `Red 500` to `Red 300` or `Red 700`.
 */
export type PaletteTonalOffset =
    | number
    | {
        light: number
        dark: number
    }
