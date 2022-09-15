import type { SxProps } from "@mui/material"

import type { Css } from "@app/types"
import { linearGradient } from "@app/theme/helpers/linear-gradient"

const stops: Css.ColorStop[] = [
    { percentage:   "0%", transparency: 0.40, color: "#585949" },
    { percentage:  "15%", transparency: 0.70, color: "#676856" },
    { percentage:  "35%", transparency: 0.80, color: "#737360" },
    { percentage:  "50%", transparency: 0.90, color: "#777664" },
    { percentage:  "70%", transparency: 0.80, color: "#70715E" },
    { percentage:  "85%", transparency: 0.70, color: "#646454" },
    { percentage: "100%", transparency: 0.40, color: "#555447" },
]

const gradient = linearGradient({ direction: "180deg", stops })

export const cardSideBorder: SxProps = {
    borderRadius: "2px",
    background: gradient,
}
