import {
    TypographyVariantsOptions,
    Components,
} from "@mui/material"

// // import AgmenaProWoff2 from "../../../assets/fonts/AgmenaPro/woff/AgmenaPro-Regular.woff2"
// import AgmenaProWoff2     from "@assets/fonts/AgmenaPro/woff/AgmenaPro-Regular.woff2"
// // import AgmenaProBoldWoff2 from "@assets/fonts/AgmenaPro/woff/AgmenaPro-Bold.woff2"
// import "../../../assets/fonts/AgmenaPro/woff/AgmenaPro-Regular.woff2"

// const fontFolderPath = "../assets/fonts/AgmenaPro/woff/"

export const typography: TypographyVariantsOptions = {
    // allVariants: {
    fontFamily: [
        "garamond-premier-pro-display",
        // "Agmena Pro",
        // '"Helvetica Neue"',
        // "Arial",
        // "sans-serif",
    ].join(","),
    // },
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
