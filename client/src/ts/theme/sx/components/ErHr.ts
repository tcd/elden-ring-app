import type {
    SxProps,
    // Theme as MuiTheme,
} from "@mui/material"

import {
    ThemeVars,
    // ThemeBreakpoints,
} from "@app/theme"

const hr: SxProps = {
    display: "block",
    content: ThemeVars.ZWSP,
}

// =============================================================================
// Modal, Affinity Modal, Dialog
// =============================================================================

/**
 * - `.er__modal > .top-border`
 * - `.er__modal > .bottom-border`
 * - `.er__affinityModal > .top-border`
 * - `.er__affinityModal > .bottom-border`
 * - `.er__dialog__topBorder`
 * - `.er__dialog__bottomBorder`
 */
const borderSx: SxProps = {
    ...hr,
    width: "100%",
    height: "3px",
    background: ThemeVars.gradients.modalHorizontalBorder,
}

/**
 * - `.er__modal         > .inner-border-wrapper`
 * - `.er__affinityModal >.inner-border-wrapper`
 */
const innerBorderWrapperSx: SxProps = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
}

/**
 * - `.er__modal         > .inner-border-wrapper > .inner-border`
 * - `.er__affinityModal > .inner-border-wrapper > .inner-border`
 */
const innerBorderContentSx: SxProps = {
    ...hr,
    textAlign: "center",
    width: "90%",
    height: "2px",
    background: ThemeVars.gradients.modalInnerBorder,
}

// =============================================================================
// Equipment Menu
// =============================================================================

const equipmentMenuSx: SxProps = {
    ...hr,
    width: "94.44444444%",
    height: "3px",
    my: "6px",
    background: ThemeVars.gradients.equipmentMenuDivider,
}

// =============================================================================
// All Together
// =============================================================================

export const ErHr = {
    borderSx,
    innerBorderWrapperSx,
    innerBorderContentSx,
    equipmentMenuSx,
}
