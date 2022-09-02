// import type { SxProps } from "@mui/material"
import type { Grid2Props as GridProps } from "@mui/material/Unstable_Grid2"

// import { ThemeVars } from "@app/theme"

const rootProps: GridProps = {
    container: true,
    direction: "row",
}

const col1: GridProps = {
    xs: 6,
}

const col2: GridProps = {
    xs: true,
}

const col3: GridProps = {
    xs: 2.5,
}

// =============================================================================
// All Together
// =============================================================================

export const TriPage = {
    rootProps,
    col1,
    col2,
    col3,
}
