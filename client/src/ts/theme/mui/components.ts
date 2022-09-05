import type { Components } from "@mui/material"
// import type {} from "@mui/x-data-grid/themeAugmentation"

import { pointerOnHover } from "../sx/mixins/pointer-on-hover"
// import { colors } from "../variables/colors"
import { baseStyles } from "./base-styles"

export const components: Components = {
    MuiCssBaseline: {
        styleOverrides: {
            html: baseStyles.html,
            body: baseStyles.body,
            "#root": baseStyles.root,
        },
    },
    MuiTypography: {
        defaultProps: {
            display: "inline",
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
