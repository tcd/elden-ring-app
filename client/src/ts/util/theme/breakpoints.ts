// import type { B}
import type { BreakpointsOptions } from "@mui/material"

const _defaults: BreakpointsOptions = {
    keys: [
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
    ],
    values: {
        xs: 0, // extra-small
        sm: 600, // small
        md: 900, // medium
        lg: 1200, // large
        xl: 1536, // extra-large
    },
}

export const breakpointsOptions: BreakpointsOptions = {
    keys: [
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "xxl",
    ],
    values: {
        xs:  0,    // extra-small
        sm:  550,  // small
        md:  770,  // medium
        lg:  990,  // large
        xl:  1200, // extra-large
        xxl: 1400, // extra-extra-large
    },
}

type Breakpoint =
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "xxl"

export const breakpoints: Record<Breakpoint, number> = breakpointsOptions.values
