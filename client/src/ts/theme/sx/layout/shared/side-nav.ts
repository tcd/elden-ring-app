import type { SxProps } from "@mui/material"

import { getImageSrcManual } from "@app/util"
import {
    ThemeVars,
    EldenRingMaterialTheme as Theme,
    cssUrl,
    transition,
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
        background: ThemeVars.gradients.sideNavMobileBackdrop,
    },
}

/** `#er__sideNav` */
const root: SxProps = {
    zIndex: ThemeVars.zIndex.sideNav,
    background: ThemeVars.gradients.sideNav,
    width: ThemeVars.layout.sideNav.width.desktop,

    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",

    // boxSizing: "border-box",
    // position: "absolute",
    // height: "100",
    // margin: "0px",
    // padding: "0px",

    [Theme.breakpoints.down("sm")]: {
        width: ThemeVars.layout.sideNav.width.mobile,
    },
}

/** `ul#er__sideNavItems` */
const items: SxProps = {
    px: 0,
}

/** `.er__sideNavItem` */
const item: SxProps = {
    zIndex: ThemeVars.zIndex.sideNavItem,

    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    my: "25px",
    borderRadius: "5px",

    willChange: "background-image",
    // transition: "background-image 0.1s ease-in 0s",
    transition: transition({ property: "background-image", duration: "0.1s", timing: "ease-in-out" }),

    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%", /** width height */
    backgroundImage: cssUrl("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="),

    "&:hover": {
        cursor: "pointer",
        backgroundImage: cssUrl(getImageSrcManual("ui/header/cropped", "public")),
    },

    "& *": {
        "&:hover": {
            cursor: "pointer",
        },
    },
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
