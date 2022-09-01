import type { SxProps } from "@mui/material"
import Color from "color"

import { ThemeVars } from "@app/theme"
import { pointerOnHover } from "../../mixins"

/** `.er__startingClass` */
const root: SxProps = {
    "& ul": {
        paddingLeft: "0px",
        listStyle: "none",
    },
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",

    // FIXME: I really don't think we need all four of these.
    alignItems:     "stretch",
    alignContent:   "stretch",
    justifyItems:   "stretch",
    justifyContent: "stretch",
}

/** `#er__startingClass__menu` */
const menu: SxProps = {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
}

/** `#er__startingClass__menu > .er__startingClass__menu__arrowContainer` */
const arrowContainer: SxProps = {
    height: "100%",
    width: "100px",
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
}

/** `ul#er__startingClass__menu__options` */
const options: SxProps = {
    height: "100%",
    width: "100%",
}

/** `ul#er__startingClass__menu__options > .er__startingClass__menu__option` */
const option: SxProps = {
    height: "100%",

    backgroundRepeat:   "no-repeat",
    backgroundSize:     "contain",
    backgroundPosition: "center",

    marginTop:    "0px",
    marginBottom: "0px",
    paddingTop:    "0px",
    paddingBottom: "0px",
    backgroundColor: "#1f1c16",
    border: "3px solid #312d26",
    ...pointerOnHover,
}

/**
 * - `.er__startingClass__menu__optionHoverOverlay`
 * - `.er__startingClass__menu__optionOverlay`
 */
const optionOverlay: SxProps = {
    position: "absolute",
    bottom: "0",
    left:   "0",
    width:  "100%",
    height: "100%",
}

// =============================================================================
// All Together
// =============================================================================

export const StartingClassPage = {
    root,
    menu,
    arrowContainer,
    options: {
        root: options,
        item: option,
        overlay: optionOverlay,
    },
}
