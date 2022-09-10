import type { SystemStyleObject } from "@mui/system"
import Color from "color"

import type { Css } from "@app/types"
import { linearGradient } from "@app/theme/helpers/linear-gradient"

// =============================================================================

const COLORS = {
    thumb: "#5c5c4d",

    center1: "#35332b",
    center2: "#3c3a31",

    left1: "#414135",
    left2: "#4c4c3e",
    left3: "#444337",
    right1: "#4e4c3f",
    right2: "#49483c",
    right3: "#36342a",
}

const trackStops: Css.ColorStop[] = [
    { percentage: "0%",   transparency: 1, color: COLORS.center1 },
    { percentage: "100%", transparency: 1, color: COLORS.center2 },
]

const trackGradient = linearGradient({ direction: "90deg", stops: trackStops })

// =============================================================================

/**
 * [Scrollbar Anatomy](https://cdn.orangeable.com/img/scrollbar-anatomy.png)
 */
export type ScrollbarFuncOptions = {
    track: string;
    thumb: string;
    active: string;
}

/**
 * ## Source
 *
 * - [`@mui/material/darkScrollbar`](https://github.com/mui/material-ui/blob/552f04e24d617a7b1d5cd83eaf14e8c19395ac24/packages/mui-material/src/darkScrollbar/index.ts)
 *
 * ## See Also
 *
 * - [MDN - `scrollbar-color`](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color)
 * - [MDN - `scrollbar-width`](https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width)
 * - [MDN - `::-webkit-scrollbar`](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-scrollbar)
 * - [From 2009](https://webkit.org/blog/363/styling-scrollbars/)
 * - [bottom right corner](https://stackoverflow.com/a/11668105/7687024)
 */
export const scrollbar = (): SystemStyleObject => {

    const activeBg = Color(COLORS.thumb).darken(0.2).string()

    const borderRadius = 6
    const width = 12 // console.log(`${window.innerWidth - document.body.clientWidth}px`)

    return {
        "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            width: width,
            background: `${COLORS.center1} ${trackGradient}`,
            borderRadius: borderRadius,
        },
        "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: borderRadius,
            backgroundColor: COLORS.thumb,
            minHeight: 22,
            border: `3x solid ${trackGradient}`,
        },
        "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            background: `${COLORS.center1} ${trackGradient}`,
        },
        "&::-webkit-scrollbar-thumb:focus,  & *::-webkit-scrollbar-thumb:focus":  { backgroundColor: activeBg },
        "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": { backgroundColor: activeBg },
        "&::-webkit-scrollbar-thumb:hover,  & *::-webkit-scrollbar-thumb:hover":  { backgroundColor: activeBg },
    }
}
