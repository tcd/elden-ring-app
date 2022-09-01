import type { SxProps } from "@mui/material"

import type { Css } from "@app/types"
import { linearGradient } from "@app/theme/helpers/linear-gradient"

import { startingClass } from "../../variables/variables.scss"

const stops: Css.ColorStop[] = [
    { percentage:   "0%", transparency: 1.0, color: startingClass.bgGradientColorLeft  },
    { percentage:  "50%", transparency: 1.0, color: startingClass.bgGradientColorRight },
    { percentage: "100%", transparency: 1.0, color: startingClass.bgGradientColorRight },
]

const gradient = linearGradient({ direction: "90deg", stops })

export const startingClassGradient: SxProps = {
    background: gradient,
}
