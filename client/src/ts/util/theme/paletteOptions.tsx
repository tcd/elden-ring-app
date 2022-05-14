import { PaletteOptions } from "@mui/material"

import { COLORS } from "."

export const paletteOptions: PaletteOptions = {
    common: {
        black: COLORS.black,
        white: COLORS.white,
    },
    primary: {
        main: COLORS.yellow,
    },
    secondary: {
        main: "#4ec9b0",
    },
    // info: {
    //     main: "#c586c0",
    // },
    error: {
        main: COLORS.red,
    },
    success: {
        main: COLORS.blue,
    },
    warning: {
        main: "#d7ba7d",
    },
    mode: "dark",
}
