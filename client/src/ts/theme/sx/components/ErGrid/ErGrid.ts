import type { SxProps } from "@mui/material"
import type { Grid2Props as GridProps } from "@mui/material/Unstable_Grid2"

import {
    ThemeVars,
    ThemeBreakpoints,
} from "@app/theme"

const heightCalculation = [
    "100vh",
    ThemeVars.layout.footer.height,
    ThemeVars.layout.header.height,
    "1.0rem", // Layout.desktop.outletWrapper - marginTop
    "0.5rem", // Layout.desktop.outletWrapper - marginBottom
].join(" - ")

const container: GridProps = {
    container: true,
    direction: "row",
}

const col1: GridProps = {
    xs: 12,
    sm: 5,
    sx: {
        height: `calc(${heightCalculation})`,
        backgroundColor: "indianRed",
    },
}

const col1Content: SxProps = {
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: "DarkOrange",
    [ThemeBreakpoints.down("sm")]: {
        px: "10%",
    },
    [ThemeBreakpoints.up("sm")]: {
        px: "20%",
    },
}

const col2: GridProps = {
    xs: 12,
    sm: true,
    sx: {

    },
}

const col3: GridProps = {
    xs: 12,
    sm: 2.5,
    sx: {

    },
}


/**
 * Wraps the following components:
 * - `EquipmentMenu`
 * - `EquipmentSlots`
 *
 * They aren't always used inside of an `ErGrid`, so this makes sure they behave elsewhere.
 */
const gridWrapper: SxProps = {
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
}

// =============================================================================
// All Together
// =============================================================================

export const ErGrid = {
    container,
    col1Content,
    col1,
    col2,
    col3,
    gridWrapper,
}
