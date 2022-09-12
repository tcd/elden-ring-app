import type { SxProps } from "@mui/material"

import {
    ThemeVars,
    boxShadow,
    rgba,
    CssMath,
    bracketBorders,
} from "@app/theme"

const vars = ThemeVars.forms.textField

// =============================================================================
// Wrapper
// =============================================================================

const wrapper_absolute: SxProps = {
    zIndex: vars.zIndex.absolute,

    position: "absolute",
    top: 0,
    left: 0,

    width: "100%",
    height: "100%",

    m: 0,
    p: 0,

    backgroundColor: "transparent",

    ...bracketBorders(vars.colors.border, vars.borderThickness),
}

// -----------------------------------------------------------------------------
// Borders
// -----------------------------------------------------------------------------

const _border: SxProps = {
    zIndex: vars.zIndex.borders,
    // ...invisibleContent,
    // boxSizing: "border-box",
    position: "absolute",
    height: vars.borderThickness,
    width: vars.borderLength,
    // width: CssMath.multiply(vars.borderThickness, 5),
    // background: vars.colors.border,
    background: "transparent",
    m: "0px",
    p: "0px",
    boxShadow: boxShadow({
        x: "0px",
        y: "0px",
        blur: "1.0px",
        spread: "1.5px",
        color: rgba(vars.colors.border, 0.5).hexa(),
        // color: "blue",
    }),
}

const border_left: SxProps = {
    ..._border,
    height: `calc(100% - ${vars.borderThickness})`,
    width: vars.borderThickness,
    top: vars.borderThickness,
    left: 0,
}

const border_right: SxProps = {
    ..._border,
    height: "100%",
    width: vars.borderThickness,
    top: 0,
    right: 0,
}

const border_topLeft: SxProps = {
    ..._border,
    top: 0,
    left: 0,
}

const border_bottomLeft: SxProps = {
    ..._border,
    bottom: 0,
    left: 0,
}

const border_topRight: SxProps = {
    ..._border,
    top: 0,
    right: 0,
}

const border_bottomRight: SxProps = {
    ..._border,
    bottom: 0,
    right: 0,
}

// =============================================================================
// All Together
// =============================================================================

export const borders = {
    left: border_left,
    right: border_right,
    topLeft: border_topLeft,
    bottomLeft: border_bottomLeft,
    topRight: border_topRight,
    bottomRight: border_bottomRight,
}
