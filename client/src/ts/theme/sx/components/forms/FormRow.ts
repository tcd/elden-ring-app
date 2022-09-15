import type { SxProps } from "@mui/material"

import {
    ThemeVars,
} from "@app/theme"

import {
    textShadow,
    pointerOnHoverChildren,
    invisibleContent,
} from "../../mixins"

const vars = ThemeVars.forms.textField

const flexCenter: SxProps = {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center", // vertical
    // alignItems: "center", // horizontal
}

// =============================================================================

const root: SxProps = {
    ...flexCenter,
    zIndex: vars.zIndex.input,
    boxSizing: "border-box",
    flexGrow: 1,
    flexShrink: 0,
    backgroundColor: vars.colors.rootBg,
}

const label: SxProps = {
    ...flexCenter,
}

// =============================================================================
// All Together
// =============================================================================

export const FormRow = {
    root,
    label,
}
