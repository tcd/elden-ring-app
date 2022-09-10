import type { Components, LinkProps } from "@mui/material"
import type {} from "@mui/x-data-grid/themeAugmentation"
import { experimental_sx as sx } from "@mui/material/styles"

import { ThemeVars } from "../variables"
import * as mixins from "../sx/mixins"
import { baseStyles } from "./base-styles"
import { LinkBehavior } from "./LinkBehavior"

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
                ...mixins.pointerOnHover,
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
                    content: ThemeVars.ZWSP,
                    visibility: "hidden",
                },
            },
        },
    },
    // -------------------------------------------------------------------------
    // Links
    // -------------------------------------------------------------------------
    MuiLink: {
        defaultProps: {
            component: LinkBehavior,
        } as LinkProps,
        styleOverrides: {
            root: sx({
                textDecoration: "none",
                "&:hover, &:focus, &:active, &.Mui-focusVisible": {
                    textDecoration: "underline",
                    // outline: "none",
                },
            }),
        },
    },
    // -------------------------------------------------------------------------
    // Buttons
    // -------------------------------------------------------------------------
    MuiButtonBase: {
        defaultProps: {
            disableRipple: true,
            LinkComponent: LinkBehavior,
        },
        styleOverrides: {
            root: {
                textTransform: "none",
                letterSpacing: "normal",
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
                letterSpacing: "normal",
                ...mixins.pointerOnHover,
            },
        },
        variants: [
            {
                props: { variant: "elden-ring" },
                style: {
                    textTransform: "none",
                    position: "relative",
                    borderRadius: "0px",
                    border: `1px solid ${ThemeVars.button.borderColor}`,
                    /** vertical, horizontal */
                    padding: `${ThemeVars.button.verticalPadding} ${ThemeVars.button.horizontalPadding}`,
                    backgroundColor: ThemeVars.button.colorBg,
                    color: ThemeVars.button.colorFg,
                    fontSize: "15px",
                    lineHeight: "normal",
                    transitionDuration: "0s !important",
                    ...mixins.goldenHover,
                },
            },
        ],
    },
    MuiListItemButton: {
        styleOverrides: {
            root: {
                ...mixins.pointerOnHover,
            },
        },
    },
    // -------------------------------------------------------------------------
    // Data Grid
    // -------------------------------------------------------------------------
    MuiDataGrid: {
        styleOverrides: {
            root: {
                backgroundColor: ThemeVars.colors.black,
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
