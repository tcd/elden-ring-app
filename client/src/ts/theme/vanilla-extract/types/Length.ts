// =============================================================================
// Absolute Lengths
// =============================================================================

/** 1cm = 37.8px = 25.2/64in */
export type Centimeters = `${number}cm`
/** 1mm = 1/10th of 1cm */
export type Millimeters = `${number}mm`
/** 1Q = 1/40th of 1cm */
export type QuarterMillimeters = `${number}Q`
/** 1in = 2.54cm = 96px */
export type Inches = `${number}in`
/** 1pc = 1/6th of 1in */
export type Picas = `${number}pc`
/** 1pt = 1/72nd of 1in */
export type Points = `${number}pt`
/** 1px = 1/96th of 1in */
export type Pixels = `${number}px`

export type AbsoluteLength =
    | Centimeters
    | Millimeters
    | QuarterMillimeters
    | Inches
    | Picas
    | Points
    | Pixels

// =============================================================================
// Relative Lengths
// =============================================================================

/**
 * [*ephemeral unit*](https://www.google.com/search?q=ephemeral+unit)
 *
 * Font size of the parent, in the case of typographical properties like font-size, and font size of the element itself, in the case of other properties like width.
 */
export type EM  = `${number}em`
/** x-height of the element's font. */
export type EX  = `${number}ex`
/** The advance measure (width) of the glyph `0` of the element's font. */
export type CH  = `${number}ch`
/**
 * [*root em*](https://www.w3.org/Style/Examples/007/units.html#future)
 *
 * Font size of the root element.
 */
export type REM  = `${number}rem`
/** Line height of the element. */
export type LH  = `${number}lh`
/** Line height of the root element. When used on the font-size or line-height properties of the root element, it refers to the properties' initial value. */
export type RLH  = `${number}rlh`
/** 1% of the viewport's width. */
export type VW  = `${number}vw`
/** 1% of the viewport's height. */
export type VH  = `${number}vh`
/** 1% of the viewport's smaller dimension. */
export type VMIN  = `${number}vmin`
/** 1% of the viewport's larger dimension. */
export type VMAX  = `${number}vmax`
/** 1% of the size of the initial containing block in the direction of the root element's block axis. */
export type VB  = `${number}vb`
/** 1% of the size of the initial containing block in the direction of the root element's inline axis. */
export type VI  = `${number}vi`
/** 1% of the small viewport's width. */
export type SVW  = `${number}svw`
/** 1% of the large viewport's width. */
export type LVW  = `${number}lvw`
/** 1% of the dynamic viewport's width. */
export type DVW  = `${number}dvw`
/** 1% of the small viewport's height. */
export type SVH  = `${number}svh`
/** 1% of the large viewport's height. */
export type LVH  = `${number}lvh`
/** 1% of the dynamic viewport's height. */
export type DVH  = `${number}dvh`

export type RelativeLength =
    | EM
    | EX
    | CH
    | REM
    | LH
    | RLH
    | VW
    | VH
    | VMIN
    | VMAX
    | VB
    | VI
    | SVW
    | LVW
    | DVW
    | SVH
    | LVH
    | DVH

// =============================================================================
// All Together Now:
// =============================================================================

export type Length = number | RelativeLength | AbsoluteLength
