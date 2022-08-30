import type { Components } from "@mui/material"

import { pointerOnHover } from "../sx/mixins/pointer-on-hover"
import { scrollbar } from "../helpers/scrollbar"

export const generalComponents: Components = {
    MuiCssBaseline: {
        styleOverrides: {
            body: {
                ...scrollbar(),
            },
        },
    },
    MuiButtonBase: {
        defaultProps: {
            disableRipple: true,
        },
        styleOverrides: {
            root: {
                textTransform: "none",
            },
        },
    },
    MuiSvgIcon: {
        styleOverrides: {
            root: {
                ...pointerOnHover,
            },
        },
    },
    MuiButton: {
        defaultProps: {
            disableRipple: true,
        },
        styleOverrides: {
            root: {
                textTransform: "none",
                ...pointerOnHover,
            },
        },
    },
    MuiListItemButton: {
        styleOverrides: {
            root: {
                ...pointerOnHover,
            },
        },
    },
}
