import { createGlobalTheme } from "@vanilla-extract/css"

export const vars = createGlobalTheme("#root", {
    breakpoints: {
        xs:  "0",    // extra-small
        sm:    "550",  // small
        md:    "750",  // medium
        lg:    "990",  // large
        xl:    "1200", // extra-large
        xxl:   "1400", // extra-extra-large
    },
})
