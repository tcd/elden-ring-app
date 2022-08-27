import Color from "color"
import type { SxProps } from "@mui/material"

import {
    ThemeVars,
    rgba,
    radialGradient,
    boxShadow,
} from "@app/theme"

const {
    button: vars,
    colors,
} = ThemeVars

const hoverBg = radialGradient({
    direction: "ellipse",
    color: colors.gold.dark,
    stops: [
        { percentage:  "40%", transparency: 0.0 },
        { percentage: "100%", transparency: 0.4 },
    ],
})

export const sx: SxProps = {
    position: "relative",
    borderRadius: "0px",
    border: `1px solid ${vars.borderColor}`,
    /** vertical, horizontal */
    padding: `${vars.verticalPadding} ${vars.horizontalPadding}`,
    backgroundColor: vars.bgColor,
    color: vars.fgColor,
    textShadow: `${ThemeVars.typography.textShadowOffset} black`,
    "&:hover": {
        cursor: "pointer",
        boxShadow: boxShadow({
            x:      "0px",
            y:      "0px",
            blur:   "2px",
            spread: "1px",
            color:  rgba(Color(colors.gold.dark), 0.5).hexa(),
        }),
        "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "1px",
            background: hoverBg,
        },
    },
}
