import type { SxProps } from "@mui/material"

import { ThemeVars } from "@app/theme"

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

    height: ThemeVars.layout.footer.height,
}

// =============================================================================
// Action Button
// =============================================================================

const actionRoot: SxProps = {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-end",
    alignContent: "flex-end",
}

const actionImage: SxProps = {
    height: "20px",
}

const actionName: SxProps = {
    ml: 0.5,
    padding: 0,
    color: "#d8d8d8",
    "&:hover": {
        color: "inherit",
    },
}

const actionNameSegment: SxProps = {
    my: "0 !important",
    py: "0 !important",
    ":nth-child(1)": {
        marginRight: "1px",
    },
    // ":nth-child(2)": {
    //     background: "green",
    // },
}

export const footerStyles = {
    root,
    action: {
        root: actionRoot,
        image: actionImage,
        name: actionName,
        nameSegment: actionNameSegment,
    },
}
