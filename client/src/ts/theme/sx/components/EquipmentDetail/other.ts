import type { SxProps } from "@mui/material"
import type { Grid2Props as GridProps } from "@mui/material/Unstable_Grid2"

/** `.er__equipmentDetail` */
const rootSx: SxProps = {
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "rgba(112,128,144, 0.1)",
}

const bodyRootProps: GridProps = {
    container: true,
    direction: "row",
    columns: 2,
}

const bodyItemProps: GridProps = {
    xs: 2,
    md: 1,
}

const fullBodyItemProps: GridProps = {
    xs: 2,
}

// =============================================================================
// All Together
// =============================================================================

export const other = {
    root: rootSx,
    bodyGrid: {
        rootProps: bodyRootProps,
        itemProps: bodyItemProps,
        fullItemProps: fullBodyItemProps,
    },
}
