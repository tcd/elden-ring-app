import type { SxProps } from "@mui/material"

import { typography } from "../../variables/variables.scss"

const offset = typography.textShadowOffset
export const textShadow: SxProps = {
    textShadow: `${offset} ${offset} black`,
}
