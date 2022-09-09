import type { Components } from "@mui/material"
import type {} from "@mui/x-data-grid/themeAugmentation"

import { pointerOnHover } from "../sx/mixins/pointer-on-hover"
import { colors } from "../variables/colors"
import { ZWSP } from "../variables/zwsp"
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
    MuiMenuItem: {
        styleOverrides: {
            root: {
                listStylePosition: "unset",
                paddingLeft: "0.5rem !important",
            },
        },
    },
    MuiDivider: {
        styleOverrides: {
            root: {
                // width: "100%",
                // TODO: open pull request for this?
                "&:after": {
                    content: ZWSP,
                    visibility: "hidden",
                },
            },
        },
    },
    // -------------------------------------------------------------------------
    // Buttons
    // -------------------------------------------------------------------------
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
    // -------------------------------------------------------------------------
    // Data Grid
    // -------------------------------------------------------------------------
    MuiDataGrid: {
        styleOverrides: {
            root: {
                backgroundColor: colors.black,
                ".MuiDataGrid-cell": {
                    outline: "none !important",
                    boxShadow: "none !important",
                },
                "*": {
                    textShadow: "none",
                },
            },
        },
    },
}
