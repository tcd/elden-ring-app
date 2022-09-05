import type { SxProps } from "@mui/material"

import {
    ThemeVars,
    rgba,
    radialGradient,
    boxShadow,
} from "@app/theme"

import {
    pointerOnHover,
    pointerOnHoverChildren,
    invisibleContent,
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

/** `#er__equipmentGrid` */
const rootSx: SxProps = {
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: "DarkKhaki",
    "& *, & > *": {
        boxSizing: "border-box",
    },
}

// =============================================================================
// Grid
// =============================================================================

/** `.er__equipmentGrid__row` */
const gridContainerSx: SxProps = {
    height: `calc(${heightCalculation})`,
    display: "flex",
    flexFlow: "row wrap",
    paddingTop: "0px",
    backgroundColor: "green",
}

// =============================================================================
// Cell
// =============================================================================

const _cellShared: SxProps = {
    zIndex: ThemeVars.zIndex.equipmentGridCell,
    aspectRatio: "8/9",
    // width:  "80px",
    // height: "90px",
    marginLeft: "2.5px",
    marginRight: "2.5px",
    // tablet or smaller
    // [ErTheme.breakpoints.down("md")]: {
    //     width:  "55px",
    //     height: "60px",
    // },
    /* flex-grow | flex-shrink | flex-basis */
    flex: "1 0 calc(20% - 5px)",
}

/** `.er__equipmentGrid__cell` */
const gridCellSx: SxProps = {
    ..._cellShared,
    ...pointerOnHoverChildren,
    position: "relative",
    "&:hover": {
        cursor: "pointer",
        "&::after": {
            zIndex: ThemeVars.zIndex.equipmentGridCellHover,
            content: ThemeVars.ZWSP,
            position: "absolute",
            top:    "12%",
            bottom: "10%",
            left:   "10%",
            right:  "10%",
            cursor: "pointer",
            borderRadius: "1px",
            background: radialGradient({
                direction: "ellipse",
                color: ThemeVars.colors.gold.dark,
                stops: [
                    { percentage:  "40%", transparency: 0.0 },
                    { percentage: "100%", transparency: 0.4 },
                ],
            }),
            boxShadow: boxShadow({
                x:      "0px",
                y:      "0px",
                blur:   "2px",
                spread: "1px",
                color:  rgba(ThemeVars.colors.gold.dark, 0.5).hexa(),
            }),
        },
    },
}

/** `.er__equipmentGrid__cell--filled` */
const gridCellFilledSx: SxProps = {
    ...gridCellSx,
    display: "flex",
    flexWrap: "nowrap",
    alignItems: "center",
    // "& > img": {
    //     padding: "10px",
    // },
}

/** `.er__equipmentGrid__cell--placeholder` */
const gridCellPlaceholderSx: SxProps = {
    ...invisibleContent,
    ..._cellShared,
}

/** `.er__equipmentGrid__cellImage` */
const gridCellImageSx: SxProps = {
    zIndex: ThemeVars.zIndex.equipmentGridCellImage,
    padding: "10px",
    ...imageFluid,
}

/** `.er__equipmentGrid__cellBg` */
const gridCellBackgroundSx = (backgroundImage: string): SxProps => ({
    "&::after": {
        zIndex: ThemeVars.zIndex.equipmentGridCellBackground,
        content: ThemeVars.ZWSP,
        position: "absolute",
        top:    0,
        right:  0,
        bottom: 0,
        left:   0,
        width:  "100%",
        height: "100%",
        overflow: "hidden",
        transform: "scale(1.25)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundImage,
        ...pointerOnHover,
    },
})

// =============================================================================
// All Together
// =============================================================================

export const EquipmentGrid = {
    root: rootSx,
    grid: {
        container: gridContainerSx,
        cell: gridCellSx,
        filledCell: gridCellFilledSx,
        cellBackground: gridCellBackgroundSx,
        cellImage: gridCellImageSx,
        cellPlaceholder: gridCellPlaceholderSx,
    },
}
