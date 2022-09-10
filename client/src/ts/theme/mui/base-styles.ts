import type { SxProps } from "@mui/material"
import Color from "color"

// import { getImageSrcManual } from "@app/util"

import { ThemeVars } from "../variables"
import * as helpers from "../helpers"
// import * as mixins from "../sx/mixins"


/** `<a></a>` */
const anchor: SxProps = {
    textDecoration: "none",
    color: ThemeVars.colors.gold.light,
    "&:hover, &:active, &:focus": {
        cursor: "pointer",
        textDecoration: "underline",
        color: Color(ThemeVars.colors.gold.light).darken(0.2).hexa(),
    },
    "& *": {
        "&:hover": {
            cursor: "pointer",
        },
    },
}

/**
 * - `<ul></ul>`
 * - `<ol></ol>`
 * - `<li></li>`
 */
const lists: SxProps = {
    listStyle: "none",
    listStylePosition: "inside",
    paddingLeft: "0px",
    marginLeft: "0px",
    marginBottom: "default",
    marginBlockStart: "0px",
    marginBlockEnd: "0px",
}

// =============================================================================
// Resets
// =============================================================================

const _htmlAndBody: SxProps = {
    height: "100%",
    margin: "0px !important",
    padding: "0px !important",
    // paddingRight: "0px !important",
    overflow: "hidden",
    ...helpers.scrollbar(),
}

const html: SxProps = _htmlAndBody

const body: SxProps = {
    ..._htmlAndBody,
    display: "flex",
    flexFlow: "column nowrap",
    color: ThemeVars.typography.colorFg,
    backgroundColor: "black",
    fontFamily: ThemeVars.typography.fontFamily.display,
    "*::before, *::after": {
        boxSizing: "border-box",
    },
    "& *": {
        boxSizing: "border-box",
        fontFamily: ThemeVars.typography.fontFamily.display,
    },
    "& a":              anchor,
    "& ol, & ul, & li": lists,
}

// =============================================================================
// Root
// =============================================================================

/**
 * The tippy top level (html & body don't count).
 *
 * `body > #root`
 */
const root: SxProps = {
    padding: 0,
    margin: 0,
    // height: "100vh",
    height: "100%",

    flexGrow: 1,
    display: "flex",
    flexFlow: "column nowrap",

    // overflowY: "scroll",
    overflow: "auto !important",

    // backgroundImage: cssUrl(getImageSrcManual("ui/background", "public")),
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    // backgroundSize: "cover",

    "&.startingClassPage": {
        backgroundImage: "none !important",
        backgroundColor: ThemeVars.startingClass.bgGradientColorLeft,
        background: ThemeVars.gradients.startingClassBackground + " !important",
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
