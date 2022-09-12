import type { SxProps } from "@mui/material"

import {
    ThemeVars,
    bracketBorders,
    boxShadow,
    rgba,
    CssMath,
} from "@app/theme"

import {
    invisibleContent,
} from "../../../mixins"


const itemGradient = "linear-gradient(90deg, #352f271a 0%, #352f2740 10%, #352f27bf 50%, #352f2740 90%, #352f271a 100%)"

const itemActiveGradient = "linear-gradient(90deg, #52493c1a 0%, #52493c40 10%, #52493cbf 50%, #52493c40 90%, #52493c1a 100%)"

const vars = ThemeVars.forms.textField

const flexCenter: SxProps = {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center", // vertical
    // alignItems: "center", // horizontal
}

// =============================================================================
// Wrapper
// =============================================================================

const root: SxProps = {
    zIndex: vars.zIndex.root,
    // boxSizing: "content-box",
    // position: "relative",


    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center", // horizontal
    // alignItems: "center", // vertical

    // textAlign: "center",

    width: "300px",
    height: "50px",

    px: "20px",
    // m: 0,

    background: itemGradient,
    backgroundColor: vars.colors.rootBg,
    // backgroundColor: "royalblue",

    // borderRadius: "0px",

    // borderLeft: `${borderSize} solid ${colors.border}`,
    // borderRight: `${borderSize} solid ${colors.border}`,
}

const content: SxProps = {
    zIndex: vars.zIndex.wrapper,
    // boxSizing: "content-box",
    boxSizing: "border-box",
    position: "relative",

    ...flexCenter,
    textAlign: "center",

    // width: "250px", // correct-ish

    width: "100px",
    // height: "50px",

    p: "7px",

    backgroundColor: vars.colors.rootBg,
    // backgroundColor: "indianred",

    // borderRadius: "0px",

    // borderLeft: `${borderSize} solid ${colors.border}`,
    // borderRight: `${borderSize} solid ${colors.border}`,
    // ...bracketBorders("#ffb1bb", vars.borderSize),
}

const absolute: SxProps = {
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

// =============================================================================
// All Together
// =============================================================================

export const wrapper = {
    root: root,
    content: content,
    absolute: absolute,
}
