import type { SxProps } from "@mui/material"

import {
    ThemeVars,
    rgba,
    scrollbar,
} from "@app/theme"

import {
    pointerOnHover,
    imageFluid,
} from "../mixins"

// =============================================================================
// Root
// =============================================================================

/** `.er__equipmentMenu` */
const topLevel: SxProps = {
    marginLeft:  "10%",
    marginRight: "10%",
}

// =============================================================================
// Grid
// =============================================================================

/** `.er__equipmentMenu__gridColumn` */
const root: SxProps = {
    height: "75vh",
    // height: "80%",
    overflowY: "scroll",
    padding: "20px",
    marginTop: "25px",
    borderRadius: "5px",
    backgroundColor: rgba(ThemeVars.equipmentMenu.backgroundColor, 0.3).string(),
    ...scrollbar(),
}

/** `.er__equipmentMenu__gridSectionBorder` */
const divider: SxProps = {
    height: "3px",
    marginTop: "6px",
    marginBottom: "6px",
    background: ThemeVars.gradients.equipmentMenuDivider,
}

/** `section.er__equipmentMenu__gridSection` */
const section: SxProps = {
    display: "grid",
    gridTemplateColumns: "20% 20% 20% 20% 20%",
}

/** `.er__equipmentMenu__gridCell` */
const cell: SxProps = {
    ...pointerOnHover,
    boxSizing: "border-box",
    margin: "5px",
    borderRadius: "2px",
    minHeight: ThemeVars.equipmentMenu.minCellSize,
    minWidth:  ThemeVars.equipmentMenu.minCellSize,
    background: ThemeVars.gradients.equipmentCell,
}

/** `.er__equipmentMenu__gridCell.active` */
const activeCell: SxProps = {
    ...cell,
    background: "#615e4b",
}

/** `.er__equipmentMenu__imageWrapper` */
const imageWrapper: SxProps = {
    position: "relative", // for RedX
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    padding: "7px",

    "& img": {
        ...imageFluid,
    },
}

// =============================================================================
// All Together
// =============================================================================

export const EquipmentMenu = {
    root: topLevel,
    grid: {
        root: root,
        divider: divider,
        section: section,
        cell: {
            base: cell,
            active: activeCell,
        },
        imageWrapper: imageWrapper,
    },
}
