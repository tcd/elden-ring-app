import type { SxProps, Theme as MuiTheme } from "@mui/material"

import {
    ThemeVars,
    EldenRingMaterialTheme as Theme,
} from "@app/theme"

import {
    textShadow,
} from "../mixins"

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

const headerSx: SxProps = {
    textAlign: "center",
    fontSize: "25px",
    paddingTop: "10px",
    paddingBottom: "10px",
    ...textShadow,
}

const footerSx: SxProps = {
    width: "100%",
    paddingTop: "15px",
    paddingBottom: "15px",
}

const borderSx: SxProps = {
    height: "3px",
    background: `${ThemeVars.gradients.modalTopBottomBorder}, ${ThemeVars.modal.colorBorder}`,
}

const contentSx: SxProps = {
    paddingTop: "25px",
    paddingBottom: "25px",
    display: "flex",
    justifyContent: "space-around",
    // tablet or smaller
    [Theme.breakpoints.down("md")]: {
        flexDirection: "column",
        justifyContent: "space-between",
        paddingRight: "25px",
        paddingLeft: "25px",
    },
}

const dialogSx: SxProps = {
    outline: "none !important",
    minWidth: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "stretch",
    backgroundColor: ThemeVars.modal.colorBg,
    background: ThemeVars.gradients.modalBody,
    // tablet or smaller
    [Theme.breakpoints.down("md")]: {
        width: "90%",
    },
}
//
// const contentStyles = (theme: MuiTheme) => ({
//     paddingTop: "25px",
//     paddingBottom: "25px",
//     display: "flex",
//     flexDirection: "",
//     justifyContent: "space-around",
//     // tablet or smaller
//     [theme.breakpoints.down("md")]: {
//         flexDirection: "column",
//         justifyContent: "space-between",
//         paddingRight: "25px",
//         paddingLeft: "25px",
//     },
// })
//
// const dialogStyles = (theme: MuiTheme) => ({
//     outline: "none !important",
//     minWidth: "50%",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "stretch",
//     justifyContent: "stretch",
//     backgroundColor: ThemeVars.modal.colorBg,
//     background: ThemeVars.gradients.modalBody,
//     // tablet or smaller
//     [theme.breakpoints.down("md")]: {
//         width: "90%",
//     },
// })

export const ErDialog = {
    overlayStyles,
    headerSx,
    footerSx,
    borderSx,
    contentSx,
    dialogSx,
}
