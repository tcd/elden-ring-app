import type { SxProps } from "@mui/material"

import { ThemeVars } from "@app/theme"

import {
    textShadow,
    cardSideBorder,
} from "../mixins"

const rootSx: SxProps = {
    display:       "flex",
    flexDirection: "column",
    flexWrap:      "nowrap",
}

// =============================================================================
// All Together
// =============================================================================

export const AffinityModal = {
    root: rootSx,
}
