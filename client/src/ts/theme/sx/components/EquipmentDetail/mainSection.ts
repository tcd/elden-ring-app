import type { SxProps } from "@mui/material"
import type { Grid2Props as GridProps } from "@mui/material/Unstable_Grid2"

import {
    ThemeVars,
    EldenRingMaterialTheme as Theme,
    rgba,
    boxShadow,
} from "@app/theme"
import {
    invisibleContent,
    imageFluid,
} from "../../mixins"

// =============================================================================
// Main Section
// =============================================================================

/** `.er__equipmentDetail__section` */
const root: SxProps = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
}

/** `.er__equipmentDetail__detailColumn ` */
const detailColumn: SxProps = {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "space-between",
}

/** `.er__equipmentDetail__imageColumn` */
const imageColumn: SxProps = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "end",
    alignItems: "end",
}

// -----------------------------------------------------------------------------
// Mui Grid
// -----------------------------------------------------------------------------

const containerProps: GridProps = {
    container: true,
    columns: 2,
    direction: "row",
    wrap: "wrap",
    alignContent: "stretch",
    alignItems: "stretch",
    justifyContent: "stretch",
    justifyItems: "stretch",
    sx: {
        // width: "100%",
        backgroundColor: "rebeccapurple",
    },
}

const detailColumnProps: GridProps = {
    xs: 1,
    // md: 2,
    sx: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "space-between",
    },
}
const imageColumnProps: GridProps = {
    xs: 1,
    // md: 2,
    sx: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "end",
        alignItems: "end",
    },
}

// =============================================================================
// All Together
// =============================================================================

export const mainSection = {
    root,
    detailColumn,
    imageColumn,
    props: {
        container: containerProps,
        col1: detailColumnProps,
        col2: imageColumnProps,
    },
}
