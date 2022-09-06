import type {
    SxProps,
    // Theme as MuiTheme,
} from "@mui/material"

import {
    ThemeVars,
    ThemeBreakpoints,
} from "@app/theme"

import {
    textShadow,
} from "../mixins"

/** `.er__modal__overlay` */
const overlayStyles: React.CSSProperties = {
    zIndex: ThemeVars.zIndex.modalBackdrop,
    outline: "none !important",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ThemeVars.modal.backdropBg,
}

/** `.er__modal` */
const modalSx: SxProps = {
    outline: "none !important",

    minWidth: "45%",
    minHeight: "50%",

    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "stretch",

    backgroundColor: ThemeVars.modal.colorBg,
    background: ThemeVars.gradients.modalBody,
}

/** `.er__modal__main` */
const contentSx: SxProps = {
    py: "25px",

    flexGrow: 1,
    display: "flex",
    // flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
}

/** `.er__modal > header` */
const headerSx: SxProps = {
    textAlign: "center",
    fontSize: "25px",
    py: "10px",
    ...textShadow,
}

/** `.er__modal > footer` */
const footerSx: SxProps = {
    width: "100%",
    // background: ThemeVars.unsortedColors.EldenRingColor.menuBg,
    paddingTop: "15px",
    paddingBottom: "15px",

    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "spaceAround",
}

const borderSx: SxProps = {
    height: "3px",
    background: ThemeVars.gradients.modalHorizontalBorder,
}

/** `.er__modal > .inner-border-wrapper` */
const innerBorderWrapperSx: SxProps = {
    content: ThemeVars.ZWSP,
    width: "100%",

    display: "flex",
    justifyContent: "center",
}

/** `.er__modal > .inner-border-wrapper > .inner-border` */
const innerBorderContentSx: SxProps = {
    content: ThemeVars.ZWSP,
    textAlign: "center",
    width: "90%",
    height: "2px",
    background: ThemeVars.gradients.modalInnerBorder,
}

export const ErModal = {
    overlayStyles,
    modalSx,
    contentSx,
    headerSx,
    footerSx,
    borderSx,
    innerBorderWrapperSx,
    innerBorderContentSx,
}
