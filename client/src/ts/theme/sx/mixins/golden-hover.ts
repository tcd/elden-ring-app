import type { SxProps } from "@mui/material"

import {
    ThemeVars,
    rgba,
    radialGradient,
    boxShadow,
} from "@app/theme"

export const goldenHover: SxProps = {
    "& *": {
        "&:hover": {
            cursor: "pointer",
        },
    },
    "&:hover": {
        cursor: "pointer",
        boxShadow: boxShadow({
            x:      "0px",
            y:      "0px",
            blur:   "2px",
            spread: "1px",
            color:  rgba(ThemeVars.colors.gold.dark, 0.5).hexa(),
        }),
        "&::before": {
            content: ThemeVars.ZWSP,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "1px",
            background: radialGradient({
                direction: "ellipse",
                color: ThemeVars.colors.gold.dark,
                stops: [
                    { percentage:  "40%", transparency: 0.0 },
                    { percentage: "100%", transparency: 0.4 },
                ],
            }),
        },
    },
}
