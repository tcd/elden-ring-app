import type {
    SxProps,
    // Theme as MuiTheme,
} from "@mui/material"

import {
    ThemeVars,
    // ThemeBreakpoints,
} from "@app/theme"

const ul: SxProps = {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "start",
}

const li: SxProps = {

}

const li_active: SxProps = {
    ...li,
}

// =============================================================================
// All Together
// =============================================================================

export const ErList = {
    ul,
    li: {
        base: li,
        active: li_active,
    },
}
