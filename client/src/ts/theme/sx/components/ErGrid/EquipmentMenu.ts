import type { SxProps } from "@mui/material"

import {
    ThemeVars,
    rgba,
    scrollbar,
} from "@app/theme"

import {
    pointerOnHover,
    imageFluid,
} from "../../mixins"

const heightCalculation = [
    "100%",
    "24px",  // EquipmentGrid.header.title - fontSize
    "0.2em", // EquipmentGrid.header.title - paddingBottom
    "18px",  // EquipmentGrid.headerDescription - fontSize
    "20px",  // EquipmentMenu.grid.root - padding
    "20px", // little extra breathing room
].join(" - ")

// =============================================================================
// Root
// =============================================================================

/** `.er__equipmentMenu` */
const root: SxProps = {
    height: "100%",
    width: "100%",
    // backgroundColor: "DarkKhaki",
    boxSizing: "border-box",
    "& *, & > *": {
        boxSizing: "border-box",
    },
}

// =============================================================================
// Grid
// =============================================================================

/** `.er__equipmentMenu__gridColumn` */
const gridRoot: SxProps = {
    height: `calc(${heightCalculation})`,
    overflowY: "scroll",
    padding: "20px",
    borderRadius: "5px",
    // backgroundColor: rgba(ThemeVars.equipmentMenu.backgroundColor, 0.3).string(),
    backgroundColor: "green",
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
        // minWidth: "20px",
        // aspectRatio: "1/1",
    },
}

// =============================================================================
// All Together
// =============================================================================

export const EquipmentMenu = {
    root: root,
    grid: {
        root: gridRoot,
        divider: divider,
        section: section,
        cell: {
            base: cell,
            active: activeCell,
        },
        imageWrapper: imageWrapper,
    },
}
