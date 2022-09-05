import type { Property } from "csstype"
import type { TypographyOptions } from "@mui/material/styles/createTypography"

import { colors } from "./colors"

const fallbackFonts = [
    "Georgia",
    `"Times New Roman"`,
    "serif",
]

// https://graphicdesign.stackexchange.com/questions/29431/what-do-the-font-style-names-used-by-typekit-mean
const garamondPremier = {
    default: "garamond-premier-pro",
    display: "garamond-premier-pro-display",
    caption: "garamond-premier-pro-caption",
}

/** Font, line-height, and color for body text, headings, and more. */
export const typography = <const>{
    // The default font size of the Material Specification.
    fontSize: 14, // px
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: 16,
    fontWeights: {
        light:    300,
        regular:  400, // display
        medium:   500,
        semiBold: 600,
        bold:     700,
    },
    // -------------------------------------------------------------------------
    fontFamily: {
        default: [garamondPremier.default, ...fallbackFonts ].join(","),
        display: [garamondPremier.display, ...fallbackFonts ].join(","),
        caption: [garamondPremier.caption, ...fallbackFonts ].join(","),
    },
    colorFg: "#d3d3d3",
    // headingsColor: "#CFC1A6", // replaced with colors.gold.light (#C9BBA1)
    textShadowOffset: "1px",
    // statRowFontSize: "16px",
    statRowFontSize: "0.875rem", // 13.125px
}

// const pxToRem = (size: number): string => `${(size / typography.htmlFontSize) * (typography.fontSize / 14)}rem`

const offset = typography.textShadowOffset
export const defaultTextShadow: Property.TextShadow = `${offset} ${offset} 0px black`

// =============================================================================
// Material UI
//
// This is very inelegant, but Material UI doesn't provide
// a good way to actually override `TypographyOptions`.
// =============================================================================

type Variant =
    | "allVariants"
    | "pageName"
    | "body"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"

const typographyVariants: Partial<Record<Variant, React.CSSProperties>> = {
    allVariants: {
        fontFamily: typography.fontFamily.display,
        textShadow: defaultTextShadow,
    },
    pageName: {
        color: colors.gold.light,
        fontWeight: 500,
        fontSize: "34px",
        lineHeight: 1.2,
        marginTop: "0px",
        marginBottom: "0px",
    },
    body: {
        color: typography.colorFg,
    },
    h1: {
        color: colors.gold.light,
    },
    h2: {
        color: colors.gold.light,
        fontSize: "3.75rem", // 56.25px
        fontWeight: 300,
        lineHeight: 1.2,
    },
    h3: {
        color: colors.gold.light,
    },
    h4: {
        color: colors.gold.light,
    },
    h5: {
        color: colors.gold.light,
    },
}

// @ts-ignore: next-line
export const typographyOptions: TypographyOptions = {
    fontSize:     typography.fontSize,
    htmlFontSize: typography.htmlFontSize,
    ...typographyVariants,
}
