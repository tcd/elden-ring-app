import type { SxProps } from "@mui/material"

// import { ThemeVars } from "@app/theme"

/** `#er__footer` */
const root: SxProps = {
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    flexShrink: 0,
    flexFlow: "row wrap",
    justifyContent: "start",
    /* vertical | horizontal */
    padding: "0px 25px",
    // padding: "25px",
    // height: "60px",
    // paddingBottom: "10px",
    // textAlign: "center",
    // height: "30px",
    // color: ThemeVars.unsortedColors.EldenRingColor.menuFg,
    // backgroundColor: "#292927",
}

const actionRoot: SxProps = {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-end",
}

const actionImage: SxProps = {
    width: "20px",
}

const actionName: SxProps = {
    ml: 1,
    padding: 0,
    verticalAlign: "bottom",
    color: "#d8d8d8",
    "&:hover": {
        color: "inherit",
    },
}

export const footerStyles = {
    root,
    action: {
        root: actionRoot,
        image: actionImage,
        name: actionName,
    },
}