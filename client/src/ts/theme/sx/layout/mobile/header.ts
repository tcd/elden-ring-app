import type { SxProps } from "@mui/material"

import { getImageSrcManual } from "@app/util"
import {
    ThemeVars,
    cssUrl,
    mediaQuery,
} from "@app/theme"

import {
    pointerOnHover,
    textShadow,
} from "../../mixins"

/** `#er__appHeader__root` */
const root: SxProps = {
    width: "100%",
    height: ThemeVars.mobileHeader.height,
    flexShrink: 0,
    alignSelf: "flex-start",
    justifySelf: "flex-start",
    m: 0,
    p: 0,
    // position: "relative",
    display: "flex",
}

/** `#er__appHeader__background` */
const background: SxProps = {
    position: "absolute",
    top: 0,
    left: 0,

    width: "100%",
    height: ThemeVars.mobileHeader.height,
    marginTop: ThemeVars.mobileHeader.topMargin,

    backgroundRepeat: "no-repeat",
    backgroundPosition: "left center",

    [mediaQuery({ maxWidth: "349px" })]:                    { backgroundImage: cssUrl(getImageSrcManual("ui/header/300", "public")) },
    [mediaQuery({ minWidth: "350px", maxWidth: "399px" })]: { backgroundImage: cssUrl(getImageSrcManual("ui/header/350", "public")) },
    [mediaQuery({ minWidth: "400px", maxWidth: "810px" })]: { backgroundImage: cssUrl(getImageSrcManual("ui/header/400", "public")) },
    [mediaQuery({ minWidth: "811px" })]:                    { backgroundImage: cssUrl(getImageSrcManual("ui/header/811", "public")) },
}

/** `#er__appHeader__content` */
const content: SxProps = {
    boxSizing: "border-box",

    position: "absolute",
    top: 0,
    left: 0,

    width: "100%",
    height: ThemeVars.mobileHeader.contentHeight,
    marginTop: ThemeVars.mobileHeader.topMargin,

    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
}

/** `.er__appHeader__icon` */
const icon: SxProps = {
    width: ThemeVars.layout.headerImageSize,
    height: ThemeVars.layout.headerImageSize,

    marginLeft: "35px",
    marginRight: "20px",

    ...pointerOnHover,
}

/** `.er__appHeader__title` */
const title: SxProps = {
    mb: 0,
    color: ThemeVars.colors.gold.light,
    fontSize: "34px",
    // ...textShadow,
}

export const headerStyles = {
    root,
    background,
    content,
    icon,
    title,
}
