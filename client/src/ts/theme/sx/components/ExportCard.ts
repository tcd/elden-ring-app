import type { SxProps } from "@mui/material"

import { ThemeVars } from "@app/theme"

import {
    textShadow,
    pointerOnHover,
    invisibleContent,
} from "../mixins"

// =============================================================================

const root: SxProps = {
    display: "flex",
    flexFlow: "column nowrap",
    // background: "blue",
    width: "90%",
    alignItems: "center",
    pb: 5,
}

// =============================================================================

const CopyableLink__root: SxProps = {
    display: "flex",
    flexFlow: "row nowrap",
    // justifyContent: "center", // horizontal
    justifyContent: "space-between", // horizontal
    alignItems: "center", // vertical

    p: 1,
    // background: "red",
    background: ThemeVars.modal.colorBorder,
    borderRadius: "5px",

    // "&:hover": {
    //     cursor: "pointer",
    // },
    ...pointerOnHover,
}

const CopyableLink__typography: SxProps = {
    fontFamily: ThemeVars.typography.fontFamily.caption,
}

// =============================================================================

export const ExportCard = {
    root,
    CopyableLink: {
        root: CopyableLink__root,
        typography: CopyableLink__typography,
    },
}
