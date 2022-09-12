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

    ...bracketBorders(vars.colors.border, vars.borderThickness, vars.borderLength),
}

// -----------------------------------------------------------------------------
// Borders
// -----------------------------------------------------------------------------

// const _borderBoxShadow: SxProps = {
//     boxShadow: boxShadow({
//         x: "0px",
//         y: "0px",
//         blur: "1.0px",
//         spread: "1.5px",
//         color: rgba(vars.colors.border, 0.5).hexa(),
//         // color: "blue",
//     }),
// }

const _borderShared: SxProps = {
    zIndex: vars.zIndex.borders,
    // ...invisibleContent,
    // boxSizing: "border-box",
    position: "absolute",
    // background: vars.colors.border,
    backgroundColor: "transparent",
    m: "0px",
    p: "0px",
    boxShadow: boxShadow({
        x: "0px",
        y: "0px",
        blur: "2.0px",
        spread: "2.0px",
        color: rgba(vars.colors.border, 0.25).hexa(),
        // color: "blue",
    }),
}

// =============================================================================
// Vertical v1
// =============================================================================

const _border_vertical: SxProps = {
    ..._borderShared,
    top: vars.borderThickness,
    width: vars.borderThickness,
    height: `calc(100% - ${vars.borderThickness} - ${vars.borderThickness} - 3px)`,
}

const border_left: SxProps = {
    ..._border_vertical,
    left: 0,
}

const border_right: SxProps = {
    ..._border_vertical,
    right: 0,
}

// =============================================================================
// Horizontal V1
// =============================================================================

const _border_horizontal: SxProps = {
    ..._borderShared,
    height: vars.borderThickness,
    width: vars.borderLength,
    // width: CssMath.multiply(vars.borderThickness, 5),
}

const border_topLeft: SxProps = {
    ..._border_horizontal,
    top: 0,
    left: 0,
}

const border_bottomLeft: SxProps = {
    ..._border_horizontal,
    bottom: 0,
    left: 0,
}

const border_topRight: SxProps = {
    ..._border_horizontal,
    top: 0,
    right: 0,
}

const border_bottomRight: SxProps = {
    ..._border_horizontal,
    bottom: 0,
    right: 0,
}

// =============================================================================
// Horizontal v2
// =============================================================================

const horizontalBorder: SxProps = {
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100%",
    display: "flex",
    flexFlow: "row nowrap",
    backgroundColor: "orange",
    justifyContent: "stretch",
    // "&:nth-chlid(2)": {
    //     flexGrow: 1,
    // },
}

const horizontalBorderSpacer: SxProps = {
    flexGrow: 1,
    m: 0,
    p: 0,
}

const horizontalBorderSegment: SxProps = {
    zIndex: vars.zIndex.input,
    width: vars.borderLength,
    height: vars.borderThickness,
    backgroundColor: "red",
    m: 0,
    p: 0,
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
    horizontal: {
        wrapper: horizontalBorder,
        segment: horizontalBorderSegment,
        spacer: horizontalBorderSpacer,
    },
}
