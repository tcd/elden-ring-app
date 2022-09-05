import type { TypographyOptions } from "@mui/material/styles/createTypography"

import { defaultFontFamily } from "../variables/typography"
import { colors } from "../variables/colors"

export const typographyOptions: TypographyOptions = {
    allVariants: {
        fontFamily: defaultFontFamily,
    },
    h1: {
        color: colors.gold.light,
    },
    h2: {
        color: colors.gold.light,
    },
    h3: {
        color: colors.gold.light,
    },
    h4: {},
    h5: {},
    h6: {},
    subtitle1: {},
    subtitle2: {},
    body1: {},
    body2: {},
    button: {},
    caption: {},
    overline: {},
}
