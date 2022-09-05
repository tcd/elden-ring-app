import type { CSSObject } from "@mui/material"

// import { getImageSrcManual } from "@app/util"

import { startingClass } from "../variables/variables.scss"
import { typography } from "../variables/typography"
import { gradients } from "../variables/gradients"
// import { colors } from "../variables/colors"
// import { cssUrl } from "../helpers/css-url"
import { scrollbar } from "../helpers/scrollbar"

// =============================================================================
// Resets
// =============================================================================

const _htmlAndBody: CSSObject = {
    height: "100%",
    margin: "0px !important",
    padding: "0px !important",
    // paddingRight: "0px !important",
    overflow: "auto !important",
    ...scrollbar(),
}

const html: CSSObject = _htmlAndBody

const body: CSSObject = {
    ..._htmlAndBody,
    display: "flex",
    flexFlow: "column nowrap",
    color: typography.colorFg,
    backgroundColor: "black",
    fontFamily: typography.fontFamily.display,
    "& *": {
        fontFamily: typography.fontFamily.display,
    },
}

// =============================================================================
// Root
// =============================================================================

/**
 * The tippy top level (html & body don't count).
 *
 * `body > #root`
 */
const root: CSSObject = {
    padding: 0,
    margin: 0,
    // height: "100vh",
    height: "100%",

    flexGrow: 1,
    display: "flex",
    flexFlow: "column nowrap",

    // overflowY: "scroll",

    // backgroundImage: cssUrl(getImageSrcManual("ui/background", "public")),
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    // backgroundSize: "cover",

    "&.startingClassPage": {
        backgroundImage: "none !important",
        backgroundColor: startingClass.bgGradientColorLeft,
        background: gradients.startingClassBackground + " !important",
    },
}

// =============================================================================
// Export
// =============================================================================

export const baseStyles = {
    root,
    html,
    body,
}
