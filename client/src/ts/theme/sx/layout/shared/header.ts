import type { SxProps } from "@mui/material"

import { getImageSrcManual } from "@app/util"
import {
    ThemeVars,
    // EldenRingMaterialTheme as Theme,
    cssUrl,
    mediaQuery,
} from "@app/theme"

import { pointerOnHover } from "../../mixins"

/** `#er__appHeader__root` */
const root: SxProps = {
    width: "100%",
    height: ThemeVars.layout.header.height,
    flexShrink: 0,
    alignSelf: "flex-start",
    justifySelf: "flex-start",
    p: 0,
    m: 0,
    // marginTop: ThemeVars.layout.header.margins,
    // position: "relative",
    display: "flex",
}

/** `#er__appHeader__background` */
const shared: SxProps = {
    position: "absolute",
    top: 0,
    left: 0,

    width: "100%",
    height: ThemeVars.layout.header.height,
    marginTop: ThemeVars.layout.header.margins,
}

/** `#er__appHeader__background` */
const background: SxProps = {
    ...shared,

    backgroundRepeat: "no-repeat",
    backgroundPosition: "left center",

    [mediaQuery({ maxWidth: "349px" })]:                    { backgroundImage: cssUrl(getImageSrcManual("ui/header/300", "public")) },
    [mediaQuery({ minWidth: "350px", maxWidth: "399px" })]: { backgroundImage: cssUrl(getImageSrcManual("ui/header/350", "public")) },
    [mediaQuery({ minWidth: "400px", maxWidth: "810px" })]: { backgroundImage: cssUrl(getImageSrcManual("ui/header/400", "public")) },
    [mediaQuery({ minWidth: "811px" })]:                    { backgroundImage: cssUrl(getImageSrcManual("ui/header/811", "public")) },
}

/** `#er__appHeader__content` */
const content: SxProps = {
    ...shared,

    boxSizing: "border-box",

    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
}

/** `.er__appHeader__icon` */
const icon: SxProps = {
    ...pointerOnHover,

    width: ThemeVars.layout.header.imageSize,
    height: ThemeVars.layout.header.imageSize,

    marginLeft:  { xs: "35px", md: "40px" },
    marginRight: { xs: "20px", md: "15px" },
}

/** `.er__appHeader__title` */
const title: SxProps = {
    my: 0,
    fontWeight: 500,
    lineHeight: 1.2,
    fontFamily: ThemeVars.defaultFontFamily,
    color: ThemeVars.colors.gold.light,
    fontSize: "34px",
}

export const headerStyles = {
    root,
    background,
    content,
    icon,
    title,
}
