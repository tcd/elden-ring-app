import { Property } from "csstype"
import type { TypographyOptions } from "@mui/material/styles/createTypography"

import { colors } from "./colors"

export const defaultFontFamily: Property.FontFamily = [
    "garamond-premier-pro-display",
    "Garamond",
    "Georgia",
    `"Times New Roman"`,
    "serif",
].join(",")

/** Font, line-height, and color for body text, headings, and more. */
export const typography = <const>{
    colorFg: "#d3d3d3",
    headingsColor: "#cfc1a6",
    textShadowOffset: "1px",
    // statRowFontSize: "16px",
    statRowFontSize: "0.875rem",
}

const offset = typography.textShadowOffset
export const defaultTextShadow: Property.TextShadow = `${offset} ${offset} 0px black`

// =============================================================================
// Material UI
// =============================================================================

export const typographyOptions: TypographyOptions = {
    allVariants: {
        fontFamily: defaultFontFamily,
        textShadow: defaultTextShadow,
    },
    h1: {
        color: colors.gold.light,
    },
    h2: {
        color: colors.gold.light,
    },
    h3: {
        color: typography.colorFg,
    },
    h4: {
        color: typography.colorFg,
    },
    h5: {
        color: typography.colorFg,
    },
    h6: {
        color: typography.colorFg,
    },
    subtitle1: {
        color: typography.colorFg,
    },
    subtitle2: {
        color: typography.colorFg,
    },
    body1: {
        color: typography.colorFg,
    },
    body2: {
        color: typography.colorFg,
    },
    button: {
        color: typography.colorFg,
    },
    caption: {
        color: typography.colorFg,
    },
    overline: {
        color: typography.colorFg,
    },
}
