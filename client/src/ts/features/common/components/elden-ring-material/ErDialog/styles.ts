import type { SxProps, Theme } from "@mui/material"

import { ThemeVars } from "@app/theme"

export const overlaySx: React.CSSProperties = {
    outline: "none !important",
    zIndex: ThemeVars.zIndex.modalBackdrop,
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

const offset = ThemeVars.typography.textShadowOffset
export const headerSx: SxProps = {
    textAlign: "center",
    fontSize: "25px",
    paddingTop: "10px",
    paddingBottom: "10px",
    textShadow: `${offset} ${offset} black`,
}

export const footerSx: SxProps = {
    width: "100%",
    paddingTop: "15px",
    paddingBottom: "15px",
}

export const borderSx: SxProps = {
    height: "3px",
    background: `${ThemeVars.gradients.modalTopBottomBorder}, ${ThemeVars.modal.colorBorder}`,
}

export const contentStyles = (theme: Theme) => ({
    paddingTop: "25px",
    paddingBottom: "25px",
    display: "flex",
    flexDirection: "",
    justifyContent: "space-around",
    // tablet or smaller
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        justifyContent: "space-between",
        paddingRight: "25px",
        paddingLeft: "25px",
    },
})

export const dialogStyles = (theme: Theme) => ({
    outline: "none !important",
    minWidth: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "stretch",
    backgroundColor: ThemeVars.modal.colorBg,
    background: ThemeVars.gradients.modalBody,
    // tablet or smaller
    [theme.breakpoints.down("md")]: {
        width: "90%",
    },
})
