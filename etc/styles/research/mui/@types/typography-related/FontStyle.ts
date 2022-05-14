// export interface FontStyle extends Required<{
//     fontFamily: React.CSSProperties['fontFamily']
//     fontSize: number
//     fontWeightLight: React.CSSProperties['fontWeight']
//     fontWeightRegular: React.CSSProperties['fontWeight']
//     fontWeightMedium: React.CSSProperties['fontWeight']
//     fontWeightBold: React.CSSProperties['fontWeight']
//     htmlFontSize: number
// }> { }

export type CssFontFamily =
    | string
    | undefined

export type CssFontWeight =
    | number
    | string

export interface FontStyle {
    fontFamily: string
    fontFamilyCode: string
    fontFamilyTagline: string
    fontFamilySystem: string
    fontSize: number | string
    /**
     * Tell MUI what's the font-size on the html element.
     * 16px is the default font-size used by browsers.
     */
    htmlFontSize: number | string
    fontWeightLight: number | string
    fontWeightRegular: number | string
    fontWeightMedium: number | string
    fontWeightSemiBold: number | string
    fontWeightBold: number | string
    fontWeightExtraBold: number | string
}

// These were the values present in the default theme.
export interface VariantFontStyle {
    display: string
    fontFamily?: string
    fontWeight?: number | string
    fontSize?: number | string
    lineHeight?: number
    textTransform?: string
    letterSpacing?: number
    color?: string
}


