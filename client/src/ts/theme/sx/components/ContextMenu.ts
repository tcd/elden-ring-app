import type { SxProps } from "@mui/material"

import {
    ThemeVars,
} from "@app/theme"

import {
    pointerOnHoverChildren,
    hoverPlus,
} from "../mixins"

/** `#er__contextMenu` */
const root: React.CSSProperties = {
    zIndex: ThemeVars.zIndex.contextMenu,

    width: "200px",

    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "stretch",
    justifyContent: "stretch",

    background: ThemeVars.gradients.modalBody,
}

/** `#er__contextMenu > ul` */
const list: SxProps = {
    flexGrow: 1,
    my: 0,
    mx: "10px",
    py: "10px",
}

/** `#er__contextMenu > ul > li` */
const option: SxProps = {
    ...pointerOnHoverChildren,
    height: "25px",
    my: "10px",

    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",

    background: ThemeVars.gradients.contextMenuItem,

    ...hoverPlus({
        cursor: "pointer",
        background: ThemeVars.gradients.contextMenuItemActive,
    }),
}

const borders: SxProps = {
    height: "2px",

    background: ThemeVars.gradients.modalHorizontalBorder,
}

// =============================================================================
// All Together
// =============================================================================

export const ContextMenu = {
    root,
    borders,
    list,
    option,
}
