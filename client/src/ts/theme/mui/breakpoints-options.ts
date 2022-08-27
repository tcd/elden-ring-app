import type { BreakpointsOptions } from "@mui/material"

import { gridBreakpoints } from "../variables/breakpoints"

// const _defaults: BreakpointsOptions = {
//     keys: [
//         "xs",
//         "sm",
//         "md",
//         "lg",
//         "xl",
//     ],
//     values: {
//         xs:    0, // extra-small
//         sm:  600, // small
//         md:  900, // medium
//         lg: 1200, // large
//         xl: 1536, // extra-large
//     },
// }

export const breakpointsOptions: BreakpointsOptions = {
    keys: [
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        // "xxl",
    ],
    values: {
        xs: gridBreakpoints.xs,   // extra-small
        sm: gridBreakpoints.sm,   // mobile
        md: gridBreakpoints.md,   // tablet
        lg: gridBreakpoints.lg,   // laptop
        xl: gridBreakpoints.xl,   // desktop
        // xxl: gridBreakpoints.xxl, // extra-extra-large
    },
}

export const breakpoints: Record<keyof typeof breakpointsOptions.values, number> = breakpointsOptions.values
