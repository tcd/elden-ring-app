import { PaletteOptions } from "@mui/material"

import { colors } from "../variables/colors"

export const paletteOptions: PaletteOptions = {
    common: {
        black: colors.black,
        white: colors.white,
    },
    primary: {
        main: colors.yellow,
    },
    secondary: {
        main: "#4ec9b0",
    },
    // info: {
    //     main: "#c586c0",
    // },
    error: {
        main: colors.red,
    },
    success: {
        main: colors.blue,
    },
    warning: {
        main: "#d7ba7d",
    },
    mode: "dark",
}
