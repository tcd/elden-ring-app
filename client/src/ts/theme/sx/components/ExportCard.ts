import type { SxProps } from "@mui/material"
import Color from "color"

import { ThemeVars, ThemeBreakpoints } from "@app/theme"
import { merge } from "@app/util"

import {
    pointerOnHover,
} from "../mixins"

// =============================================================================

const root: SxProps = {
    display: "flex",
    flexFlow: "column nowrap",
    width: "90%",
    alignItems: "center",
    justifyContent: "space-around",
    pb: 5,
    [ThemeBreakpoints.down("sm")]: {
        width: "75%",
    },
}

// =============================================================================

const CopyableLink__root: SxProps = merge(pointerOnHover, {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between", // horizontal
    alignItems: "center", // vertical
    py: 1,
    pl: 2,
    pr: 1,
    mb: 5,
    backgroundColor: ThemeVars.modal.colorBorder,
    borderRadius: "5px",
    "&:hover": {
        backgroundColor: Color(ThemeVars.modal.colorBorder).darken(0.2).hexa(),
    },
})

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
