import {
    AugmentColorFunction,
    Color,
    CommonColors,
    GetContrastTextFunction,
    PaletteColor,
    PaletteMode,
    PaletteTonalOffset,
    TypeAction,
    TypeBackground,
    TypeDivider,
    TypeText,
} from "."

export interface Palette {
    /** A collection of common colors. */
    common: CommonColors
    /** The palette mode, can be "light" or "dark". */
    mode: PaletteMode
    /** Used by `getContrastText()` to maximize the contrast between the background and the text. */
    contrastThreshold: number
    /** Used by the functions below to shift a color's luminance by approximately two indexes within its tonal palette. */
    tonalOffset: PaletteTonalOffset
    /* The colors used to represent primary interface elements for a user. */
    primary: PaletteColor
    /* The colors used to represent secondary interface elements for a user. */
    secondary: PaletteColor
    /* The colors used to represent interface elements that the user should be made aware of. */
    error: PaletteColor
    /* The colors used to represent potentially dangerous actions or important messages. */
    warning: PaletteColor
    info: PaletteColor
    success: PaletteColor
    /** The grey colors. */
    grey: Color
    text: TypeText
    divider: TypeDivider
    /** The colors used to style the action elements. */
    action: TypeAction
    /** The background colors used to style the surfaces. */
    background: TypeBackground
    getContrastText: GetContrastTextFunction
    augmentColor: AugmentColorFunction,
}
