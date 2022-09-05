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
    headingsColor: "#cfc1a6",
    textShadowOffset: "1px",
    // statRowFontSize: "16px",
    statRowFontSize: "0.875rem",
}

const offset = typography.textShadowOffset
export const defaultTextShadow: Property.TextShadow = `${offset} ${offset} black`
