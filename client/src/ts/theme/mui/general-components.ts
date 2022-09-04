import type { Components } from "@mui/material"
// import type {} from "@mui/x-data-grid/themeAugmentation"

import { pointerOnHover } from "../sx/mixins/pointer-on-hover"
import { scrollbar } from "../helpers/scrollbar"
// import { colors } from "../variables/colors"

export const generalComponents: Components = {
    MuiCssBaseline: {
        styleOverrides: {
            body: {
                ...scrollbar(),
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
    // MuiDataGrid: {
    //     styleOverrides: {
    //         root: {
    //             backgroundColor: colors.black,
    //             ".MuiDataGrid-cell": {
    //                 outline: "none !important",
    //                 boxShadow: "none !important",
    //             },
    //         },
    //     },
    // },
}
