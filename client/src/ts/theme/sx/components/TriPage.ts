// import type { SxProps } from "@mui/material"
import type { Grid2Props as GridProps } from "@mui/material/Unstable_Grid2"

// import { ThemeVars } from "@app/theme"

const container: GridProps = {
    container: true,
    direction: "row",
}

const col1: GridProps = {
    xs: 12,
    sm: 5,
    sx: {
        mx: {
            // sm: 1,
        },
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

// =============================================================================
// All Together
// =============================================================================

export const TriPage = {
    container,
    col1,
    col2,
    col3,
}
