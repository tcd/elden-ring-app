import type { SxProps } from "@mui/material"

import { ThemeVars } from "@app/theme"

import {
    textShadow,
    pointerOnHoverChildren,
    invisibleContent,
} from "../../mixins"

// TODO: `#weapon-skill-grid-menu`
// "#weapon-skill-grid-menu": {
//     position: "relative",
// }


/**
 * Couldn't recreate the SASS calculations for this in JS.
 *
 * ```css
 * linear-gradient(
 *     90deg,
 *     #352f271a   0%,
 *     #352f2740  10%,
 *     #352f27bf  50%,
 *     #352f2740  90%,
 *     #352f271a 100%
 * )
 * ```
 */
const itemGradient = "linear-gradient(90deg, #352f271a 0%, #352f2740 10%, #352f27bf 50%, #352f2740 90%, #352f271a 100%)"

/**
 * Couldn't recreate the SASS calculations for this in JS.
 *
 * ```css
 * linear-gradient(
 *      90deg,
 *      #52493c1a   0%,
 *      #52493c40  10%,
 *      #52493cbf  50%,
 *      #52493c40  90%,
 *      #52493c1a 100%
 * );
 * ```
 */
const itemActiveGradient = "linear-gradient(90deg, #52493c1a 0%, #52493c40 10%, #52493cbf 50%, #52493c40 90%, #52493c1a 100%)"

const colors = {
    inputBg: "#24231c",
    rootBg: "#292720",
    border: "#aeaeae",
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

const borderSize = "2px"

// =============================================================================
// Root
// =============================================================================

const root: SxProps = {
    boxSizing: "border-box",
    position: "relative",

    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center", // vertical
    alignItems: "center", // horizontal

    width: "250px",
    height: "50px",

    backgroundColor: colors.rootBg,

    borderRadius: "0px",

    borderLeft: `${borderSize} solid ${colors.border}`,
    borderRight: `${borderSize} solid ${colors.border}`,
}

// -----------------------------------------------------------------------------
// Borders
// -----------------------------------------------------------------------------

const _border: SxProps = {
    content: ThemeVars.ZWSP,
    position: "absolute",
    height: borderSize,
    width: "10px",
    background: colors.border,
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
    backgroundColor: colors.inputBg,
}

// =============================================================================
// All Together
// =============================================================================

export const TextField = {
    root,
    border: {
        topLeft: border_topLeft,
        bottomLeft: border_bottomLeft,
        topRight: border_topRight,
        bottomRight: border_bottomRight,
    },
    input: {
        root: input_root,
    },
}
