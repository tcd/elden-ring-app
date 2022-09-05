import type { SxProps } from "@mui/material"

import {
    ThemeVars,
    ThemeBreakpoints,
} from "@app/theme"

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
    background: ThemeVars.gradients.startingClassBackground,
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
    [ThemeBreakpoints.down("md")]: {
        height: "150px",
        width: "100%",
    },
}

const linkSx: SxProps = {
    fontFamily: "OptimusPrinceps",
    fontSize: "4rem",
    color: ThemeVars.youDied.red,
    textDecoration: "none",
    [ThemeBreakpoints.down("md")]: {
        fontSize: "1.75rem",
    },
}

export const YouDied = {
    root: rootSx,
    banner: bannerSx,
    link: linkSx,
}
