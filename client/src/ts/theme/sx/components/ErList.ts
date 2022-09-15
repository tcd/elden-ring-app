import type {
    SxProps,
    // Theme as MuiTheme,
} from "@mui/material"

import {
    ThemeVars,
    // ThemeBreakpoints,
} from "@app/theme"

/**
 * Reference:
 * - `AffinityModal`
 * - `ContextMenu`
 */
const ul: SxProps = {

    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "start",
    alignItems: "stretch",

    mt: "10px",
    pl: "0px",
    listStyle: "none",
}

const li: SxProps = {
    height: "25px",

    mx: ThemeVars.affinityModal.option.horizontalPadding,
    my: ThemeVars.affinityModal.option.verticalPadding,

    background: ThemeVars.affinityModal.gradients.item,

    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "center",

    px: "8px",
    fontSize:   ThemeVars.affinityModal.option.fontSize,
    lineHeight: ThemeVars.affinityModal.option.fontSize,

    "&:hover": {
        background: ThemeVars.affinityModal.gradients.itemActive,
        cursor: "pointer",
    },
}

const li_active: SxProps = {
    ...li,
    background: ThemeVars.affinityModal.gradients.itemActive,
    cursor: "pointer",
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
