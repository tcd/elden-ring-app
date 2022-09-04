import type { SxProps } from "@mui/material"

import { ThemeVars } from "@app/theme"

/**
 * This is meant to be applied to the most top level application component possible.
 *
 * When using `.scss`, it was applied to `#root.startingClassPage`.
 */
const appRoot: SxProps = {
    backgroundImage: "none !important",
    // background: ThemeVars.startingClass.bgGradientColorLeft + " !important",
    background: ThemeVars.gradients.startingClassBackground + " !important",
}

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

/**
 * - `.er__startingClass__topBorder`
 * - `.er__startingClass__bottomBorder`
 */
const borders: SxProps = {
    alignSelf: "center",
    width: "90%",
    marginTop:    "10px",
    marginBottom: "10px",
    height: "3px",
    background: ThemeVars.gradients.startingClassTopBottomBorder,
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

// -----------------------------------------------------------------------------
// Footer
// -----------------------------------------------------------------------------

/** `.er__startingClass__footer` */
const footer: SxProps = {
    height: "50px",
    marginLeft:  "100px",
    marginRight: "100px",
}

// =============================================================================
// All Together
// =============================================================================

export const StartingClassPage = {
    appRoot,
    root,
    menu,
    arrowContainer,
    borders,
    footer,
}
