import {
    Variant,
    VariantFontStyle,
} from "."

export interface Typography extends Record<Variant, VariantFontStyle> {

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

    pxToRem: (px: number) => string;
}
