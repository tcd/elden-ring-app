import type { SxProps } from "@mui/material"

import { ThemeBreakpoints } from "@app/theme/helpers"

// const _: SxProps = {
//     // looks like global reset
//     verticalAlign: "baseline",
// }

const outer: SxProps = {
    width: "100%",
    m: "0px",
    p: "0px",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
}

/**
 * [Bootstrap - Containers](https://getbootstrap.com/docs/5.0/layout/containers)
 */
const inner: SxProps = {
    // boxSizing: "content-box",
    // margin: "0px auto",
    mx: "auto",

    [ThemeBreakpoints.only("xs")]: {
        // backgroundColor: "red",
        width: "100%",
    },
    [ThemeBreakpoints.up("sm")]: {
        // backgroundColor: "orange",
        width: "540px",
    },
    [ThemeBreakpoints.up("md")]: {
        // backgroundColor: "yellow",
        width: "720px",
    },
    [ThemeBreakpoints.up("lg")]: {
        // backgroundColor: "green",
        width: "960px",
    },
    [ThemeBreakpoints.up("xl")]: {
        // backgroundColor: "blue",
        width: "1159px",
    },
}

/**
 * [Bootstrap - Containers](https://getbootstrap.com/docs/5.0/layout/containers)
 */
export const ErContainer = {
    outer,
    inner,
}
