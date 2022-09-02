import type { SxProps } from "@mui/material"

import {
    ThemeVars,
    EldenRingMaterialTheme as Theme,
    CssMath,
} from "@app/theme"

import {
    pointerOnHover,
    // textShadow,
} from "../../mixins"

/** `#er__sideNav__backdrop` */
const overlay: SxProps = {
    zIndex: ThemeVars.zIndex.sideNavBackdrop,
    background: ThemeVars.gradients.sideNavBackdrop,
    [Theme.breakpoints.down("sm")]: {
        background: "transparent",
    },
}

/** `#er__sideNav` */
const root: SxProps = {
    zIndex: ThemeVars.zIndex.sideNav,
    background: ThemeVars.gradients.sideNav,
    width: ThemeVars.layout.sideNavWidth,

    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",

    // boxSizing: "border-box",
    // position: "absolute",
    // height: "100",
    // margin: "0px",
    // padding: "0px",

    [Theme.breakpoints.down("sm")]: {
        background: CssMath.divide(ThemeVars.layout.sideNavWidth, 1.5),
    },
}

/** `ul#er__sideNavItems` */
const items: SxProps = {
    px: 0,
}

/** `.er__sideNavItem` */
const item: SxProps = {
    ...pointerOnHover,
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    my: "25px",
}

/** `img.er__sideNavItemImage` */
const itemImage: SxProps = {
    width: "75px",
    height: "75px",
    marginLeft: "50px",
    marginRight: "15px",
}

/** `img.er__sideNavItemTitle` */
const itemTitle: SxProps = {
    mb: 0,
    fontSize: "20px",
    color: ThemeVars.colors.gold.light,
}

export const sideNavStyles = {
    overlay,
    root,
    items,
    item,
    itemImage,
    itemTitle,
}
