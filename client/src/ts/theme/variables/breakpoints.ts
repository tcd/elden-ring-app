import type { BreakpointsOptions } from "@mui/material"

export const gridBreakpoints = <const>{
    xs:     0, // extra-small
    sm:   550, // small
    md:   750, // medium
    lg:   990, // large
    xl:  1200, // extra-large
    xxl: 1400, // extra-extra-large
}

// export const breakpoints = {
//     mobile:   "550px",
//     tablet:   "770px",
//     laptop:   "990px",
//     desktop: "1200px",
// }

// =============================================================================
// Material UI
// =============================================================================

// const _muiDefaults = {
//     xs:    0, // extra-small
//     sm:  600, // small
//     md:  900, // medium
//     lg: 1200, // large
//     xl: 1536, // extra-large
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
        xs: gridBreakpoints.xs, // extra-small
        sm: gridBreakpoints.sm, // mobile
        md: gridBreakpoints.md, // tablet
        lg: gridBreakpoints.lg, // laptop
        xl: gridBreakpoints.xl, // desktop
        zero:        0, // xs
        mobile:    550,
        tablet:    750,
        laptop:    990,
        desktop: 1_200,
        tv:      2_000, // This isn't important
    },
}
