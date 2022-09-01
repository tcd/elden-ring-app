import type { SxProps } from "@mui/material"

import {
    ThemeVars,
    EldenRingMaterialTheme as Theme,
} from "@app/theme"

import { startingClassGradient } from "../mixins"

// =============================================================================

const rootSx: SxProps = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    ...startingClassGradient,
}

const bannerSx: SxProps = {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
    height: "150px",
    width: "100%",
    textAlign: "center",
    background: ThemeVars.gradients.youDied,
    [Theme.breakpoints.down("md")]: {
        height: "150px",
        width: "100%",
    },
}

const linkSx: SxProps = {
    fontFamily: "OptimusPrinceps",
    fontSize: "4rem",
    color: ThemeVars.youDied.red,
    textDecoration: "none",
    [Theme.breakpoints.down("md")]: {
        fontSize: "1.75rem",
    },
}

export const YouDied = {
    root: rootSx,
    banner: bannerSx,
    link: linkSx,
}
