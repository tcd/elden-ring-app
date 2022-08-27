import { createGlobalTheme } from "@vanilla-extract/css"

import { Breakpoints } from "./types"

const breakpoints: Breakpoints = {
    xs:  "0px",    // extra-small
    sm:  "550px",  // small
    md:  "750px",  // medium
    lg:  "990px",  // large
    xl:  "1200px", // extra-large
    xxl: "1400px", // extra-extra-large
}

export const vars = createGlobalTheme("#er__root", {
    breakpoints: {
        xs:  "0px",    // extra-small
        sm:  "550px",  // small
        md:  "750px",  // medium
        lg:  "990px",  // large
        xl:  "1200px", // extra-large
        xxl: "1400px", // extra-extra-large
    },
})

// vars.breakpoints
