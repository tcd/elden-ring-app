// export type ExtraSmall      = "xs"
// export type Small           = "sm"
// export type Medium          = "md"
// export type Large           = "lg"
// export type ExtraLarge      = "xl"
// export type ExtraExtraLarge = "xxl"
//
// export type Breakpoint =
//     | ExtraSmall
//     | Small
//     | Medium
//     | Large
//     | ExtraLarge
//     | ExtraExtraLarge

export const BreakpointsMap = <const>{
    ExtraSmall:      "xs",
    Small:           "sm",
    Medium:          "md",
    Large:           "lg",
    ExtraLarge:      "xl",
    ExtraExtraLarge: "xxl",
}

export type BreakpointName = keyof typeof BreakpointsMap
export type Breakpoint     = typeof BreakpointsMap[BreakpointName]
