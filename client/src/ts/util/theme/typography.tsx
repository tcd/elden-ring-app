import {
    TypographyVariantsOptions,
    Components,
} from "@mui/material"

// import AgmenaProWoff2 from "../../../assets/fonts/AgmenaPro/woff/AgmenaPro-Regular.woff2"
import AgmenaProWoff2     from "@assets/fonts/AgmenaPro/woff/AgmenaPro-Regular.woff2"
// import AgmenaProBoldWoff2 from "@assets/fonts/AgmenaPro/woff/AgmenaPro-Bold.woff2"
import "../../../assets/fonts/AgmenaPro/woff/AgmenaPro-Regular.woff2"

const fontFolderPath = "../assets/fonts/AgmenaPro/woff/"

const cssString = /*CSS*/`
    @font-face {
        font-family: 'Agmena Pro';
        src: url('../assets/fonts/AgmenaPro/woff/AgmenaPro-Bold.woff2') format('woff2'),
             url('../assets/fonts/AgmenaPro/woff/AgmenaPro-Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
    }

    @font-face {
        font-family: 'Agmena Pro';
        src: url('../assets/fonts/AgmenaPro/woff/AgmenaPro-BoldItalic.woff2') format('woff2'),
             url('../assets/fonts/AgmenaPro/woff/AgmenaPro-BoldItalic.woff') format('woff');
        font-weight: bold;
        font-style: italic;
    }

    @font-face {
        font-family: 'Agmena Pro Book';
        src: url('../assets/fonts/AgmenaPro/woff/AgmenaPro-Book.woff2') format('woff2'),
             url('../assets/fonts/AgmenaPro/woff/AgmenaPro-Book.woff') format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Agmena Pro Book';
        src: url('../assets/fonts/AgmenaPro/woff/AgmenaPro-BookItalic.woff2') format('woff2'),
             url('../assets/fonts/AgmenaPro/woff/AgmenaPro-BookItalic.woff') format('woff');
        font-weight: 300;
        font-style: italic;
    }

    @font-face {
        font-family: 'Agmena Pro';
        src: url('../assets/fonts/AgmenaPro/woff/AgmenaPro-Regular.woff2') format('woff2'),
            url('../assets/fonts/AgmenaPro/woff/AgmenaPro-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Agmena Pro';
        src: url('../assets/fonts/AgmenaPro/woff/AgmenaPro-Italic.woff2') format('woff2'),
            url('../assets/fonts/AgmenaPro/woff/AgmenaPro-Italic.woff') format('woff');
        font-weight: normal;
        font-style: italic;
    }

    * {
        /* font-family: 'Agmena Pro', serif !important; */
        font-family: 'Agmena Pro', serif;
    }

`

export const typography: TypographyVariantsOptions = {
    // allVariants: {
    fontFamily: [
        "Agmena Pro",
        // '"Helvetica Neue"',
        // "Arial",
        // "sans-serif",
    ].join(","),
    // },
}

export const typographyComponents: Components = {
    MuiCssBaseline: {
        styleOverrides: `
            @font-face {
                font-family: 'Agmena Pro';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: local('Agmena Pro'), url(${AgmenaProWoff2}) format('woff2');
            }
          `,
    },
}
