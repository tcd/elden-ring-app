import type { SxProps } from "@mui/material"

import {
    ThemeVars,
    rgba,
    radialGradient,
    boxShadow,
} from "@app/theme"
import {
    pointerOnHover,
    invisibleContent,
    textShadow,
    imageFluid,
} from "../mixins"

// =============================================================================
// Root
// =============================================================================

/** `#er__equipmentGrid` */
const rootSx: SxProps = {
    display: "flex",
    flexDirection: "column",
}

// =============================================================================
// All Together
// =============================================================================

export const EquipmentDetail = {
    root: rootSx,
}
