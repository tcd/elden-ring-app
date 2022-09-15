import type { SxProps } from "@mui/material"
import Color from "color"

import { ThemeVars } from "@app/theme"

export const Anchor: SxProps = {
    color: ThemeVars.colors.gold.light,
    "&:active, &:focus, &:hover": {
        textDecoration: "underline",
        color: Color(ThemeVars.colors.gold.light).darken(0.15).hexa(),
    },
}
