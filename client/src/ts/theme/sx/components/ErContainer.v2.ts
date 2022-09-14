import type { SxProps } from "@mui/material"

import { ThemeBreakpoints } from "@app/theme/helpers"
import { reduceToObject } from "@app/util"

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

const limits = [
    { view: 576,  container: 540  },
    { view: 768,  container: 720  },
    { view: 992,  container: 960  },
    { view: 1200, container: 1140 },
]

const mediaQueries = reduceToObject(
    limits,
    ({ view, container}) => [
        `@media (min-width: ${view})`,
        { maxWidth: `${container}px` },
    ],
)

/**
 * [Bootstrap - Containers](https://getbootstrap.com/docs/5.0/layout/containers)
 */
const inner: SxProps = {
    // boxSizing: "content-box",
    // margin: "0px auto",
    mx: "auto",
    width: "100%",
    px: "15px",

    ...mediaQueries,

    // [ThemeBreakpoints.only("xs")]: {
    //     // backgroundColor: "red",
    //     width: "100%",
    // },
    // [ThemeBreakpoints.up("sm")]: {
    //     // backgroundColor: "orange",
    //     width: "540px",
    // },
    // [ThemeBreakpoints.up("md")]: {
    //     // backgroundColor: "yellow",
    //     width: "720px",
    // },
    // [ThemeBreakpoints.up("lg")]: {
    //     // backgroundColor: "green",
    //     width: "960px",
    // },
    // [ThemeBreakpoints.up("xl")]: {
    //     // backgroundColor: "blue",
    //     width: "1159px",
    // },
}

/**
 * [Bootstrap - Containers](https://getbootstrap.com/docs/5.0/layout/containers)
 */
export const ErContainerV2 = {
    outer,
    inner,
}
