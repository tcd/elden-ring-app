// import type { SxProps } from "@mui/material"

import { colors } from "@app/theme/variables/colors"
import { gradients } from "@app/theme/variables/gradients"
import { ZWSP } from "@app/theme/variables/zwsp"
import { rgba, boxShadow } from "@app/theme/helpers"

import { pointerOnHoverChildren } from "./pointer-on-hover"

export const goldenHover = {
    ...pointerOnHoverChildren,
    "&:hover": {
        cursor: "pointer",
        boxShadow: boxShadow({
            x:      "0px",
            y:      "0px",
            blur:   "2px",
            spread: "1px",
            color:  rgba(colors.gold.dark, 0.5).hexa(),
        }),
        "&::before": {
            content: ZWSP,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "1px",
            background: gradients.startingClassGoldenHover,
        },
    },
}
