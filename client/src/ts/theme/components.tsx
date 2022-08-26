import type { Components } from "@mui/material"
import type { CSSInterpolation } from "@emotion/serialize"

const pointerOnHover: CSSInterpolation = {
    "&:hover": {
        cursor: "pointer",
    },
    "& *": {
        "&:hover": {
            cursor: "pointer",
        },
    },
}

export const generalComponents: Components = {
    MuiButtonBase: {
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
    // MuiToolbar: {
    //     styleOverrides: {
    //         root: {
    //             height:    "46px !important",
    //             minHeight: "46px !important",
    //         },
    //         regular: {
    //             height:    "46px",
    //             minHeight: "46px",
    //         },
    //     },
    // },
    // MuiDrawer: {
    //     defaultProps: {
    //     },
    //     styleOverrides: {

    //     }
    // },
}
