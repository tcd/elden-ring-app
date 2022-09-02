import type { SxProps } from "@mui/material"

import {
    ThemeVars,
    cssUrl,
} from "@app/theme"

import {
    pointerOnHover,
    textShadow,
} from "../../mixins"

/** `#er__header` */
const root: SxProps = {
    // no styles
}

/** `.er__header__content` */
const content: SxProps = {
    height: "86px",
    marginTop: "15px",

    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",

    backgroundImage: cssUrl("https://imagedelivery.net/tIYDWdG54zSW0jZ2i4FVmQ/ui/title-background/public"),
    backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    // backgroundSize: "cover",

    // paddingLeft: "40px",
}

/** `.er__header__icon` */
const icon: SxProps = {
    ...pointerOnHover,

    width:  ThemeVars.layout.headerImageSize,
    height: ThemeVars.layout.headerImageSize,

    marginLeft: "40px",
    marginRight: "15px",
}

/** `.er__header__title` */
const title: SxProps = {
    mb: 0,
    color: ThemeVars.colors.gold.light,
    fontSize: "34px",
    // ...textShadow,
}

export const headerStyles = {
    root,
    content,
    icon,
    title,
}
