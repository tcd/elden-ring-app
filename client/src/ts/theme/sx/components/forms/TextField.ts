import type { SxProps } from "@mui/material"

import {
    ThemeVars,
    boxShadow,
    rgba,
} from "@app/theme"

import {
    textShadow,
    pointerOnHoverChildren,
    invisibleContent,
} from "../../mixins"

const itemGradient = "linear-gradient(90deg, #352f271a 0%, #352f2740 10%, #352f27bf 50%, #352f2740 90%, #352f271a 100%)"

const itemActiveGradient = "linear-gradient(90deg, #52493c1a 0%, #52493c40 10%, #52493cbf 50%, #52493c40 90%, #52493c1a 100%)"

const borderSize = "2px"

const colors = {
    inputBg: "#24231c",
    rootBg: "#292720",
    border: "#aeaeae",
    // border: "red",
    background: [
        "#252621",
        "#21211c",
        "#292720",
    ],
    scratchBorderColors: [
        // "#9a9990",
        "#aeaeae",
    ],
} as const

const flexCenter: SxProps = {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center", // vertical
    // alignItems: "center", // horizontal
}

/**
 * ## See:
 *
 * - [Stack Overflow - Square brackets with CSS](https://stackoverflow.com/a/41807110/7687024)
 */
const bracketBorders = (color = "#ffb1bb", size = "2px"): SxProps => ({
    backgroundImage: Array(4).fill(`linear-gradient(${color}, ${color})`).join(", "),
    backgroundRepeat: "no-repeat",
    backgroundSize: `2px ${size}`,
    backgroundPosition: ["top left", "top right", "bottom left", "bottom right"].join(", "),
    border: `solid ${color}`,
    borderWidth: `0 ${size}`,
})


// =============================================================================
// Wrapper
// =============================================================================

const wrapper_root: SxProps = {
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

    backgroundColor: colors.rootBg,
    // backgroundColor: "royalblue",

    // borderRadius: "0px",

    // borderLeft: `${borderSize} solid ${colors.border}`,
    // borderRight: `${borderSize} solid ${colors.border}`,
}

const wrapper_content: SxProps = {
    boxSizing: "border-box",
    position: "relative",

    ...flexCenter,
    textAlign: "center",

    // width: "250px", // correct-ish

    width: "100px",
    // height: "50px",

    p: "7.5px",

    backgroundColor: colors.rootBg,
    // backgroundColor: "indianred",

    // borderRadius: "0px",

    // borderLeft: `${borderSize} solid ${colors.border}`,
    // borderRight: `${borderSize} solid ${colors.border}`,
    ...bracketBorders(),
}

// -----------------------------------------------------------------------------
// Borders
// -----------------------------------------------------------------------------

const _border: SxProps = {
    // ...invisibleContent,
    // boxSizing: "border-box",
    position: "absolute",
    height: borderSize,
    width: "10px",
    background: colors.border,
    m: "0px",
    p: "0px",
    boxShadow: boxShadow({
        x: "0px",
        y: "0px",
        blur: "1.0px",
        spread: "1.0px",
        // color: rgba(colors.border, 0.5).hexa(),
        color: "blue",
    }),
}

const border_left: SxProps = {
    ..._border,
    height: "100%",
    width: borderSize,
    top: 0,
    left: 0,
}

const border_right: SxProps = {
    ..._border,
    height: "100%",
    width: borderSize,
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
// Input
// =============================================================================

const input_root: SxProps = {
    ...flexCenter,
    boxSizing: "border-box",
    flexGrow: 1,
    flexShrink: 0,
    backgroundColor: colors.inputBg,
}

// =============================================================================
// All Together
// =============================================================================

export const TextField = {
    wrapper: {
        root: wrapper_root,
        content: wrapper_content,
    },
    border: {
        left: border_left,
        right: border_right,
        topLeft: border_topLeft,
        bottomLeft: border_bottomLeft,
        topRight: border_topRight,
        bottomRight: border_bottomRight,
    },
    input: {
        root: input_root,
    },
}
