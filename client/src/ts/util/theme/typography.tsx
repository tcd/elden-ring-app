import {
    TypographyVariantsOptions,
    Components,
} from "@mui/material"
import {
    TypographyOptions,
} from "@mui/material/styles/createTypography"

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
      tcd: true;
      h4: false;
    }
}

export interface ExtendedTypographyOptions extends TypographyOptions {
    tcd: React.CSSProperties;
}

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

export const typographyOptions: ExtendedTypographyOptions = {
    allVariants: {
        fontFamily: [
            "garamond-premier-pro-display",
            // "Agmena Pro",
            // '"Helvetica Neue"',
            // "Arial",
            // "sans-serif",
        ].join(","),
    },
    tcd: {
        fontFamily: [
            "garamond-premier-pro-display",
            // "Agmena Pro",
            // '"Helvetica Neue"',
            // "Arial",
            // "sans-serif",
        ].join(","),
    },
}
