import {
    TypographyVariantsOptions,
    Components,
} from "@mui/material"
import {
    TypographyOptions,
} from "@mui/material/styles/createTypography"

const baseTypographyStyles = `
    @font-face {
        font-family: garamond-premier-pro-display;
        font-style: normal;
        font-display: swap;
        font-weight: 400;
    }
`

export const typographyComponents: Components = {
    MuiCssBaseline: {
        styleOverrides: baseTypographyStyles,
    },
}

export const typographyOptions: TypographyOptions = {
    allVariants: {
        fontFamily: [
            "garamond-premier-pro-display",
            // "Agmena Pro",
            // '"Helvetica Neue"',
            // "Arial",
            // "sans-serif",
        ].join(","),
    },
}
