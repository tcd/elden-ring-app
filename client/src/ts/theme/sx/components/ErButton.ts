import type { SxProps } from "@mui/material"

import { ThemeVars } from "@app/theme"

import {
    goldenHover,
    textShadow,
} from "../mixins"

/** `.er__button` */
export const ErButton: SxProps = {
    textTransform: "none",
    position: "relative",
    borderRadius: "0px",
    border: `1px solid ${ThemeVars.button.borderColor}`,
    /** vertical, horizontal */
    padding: `${ThemeVars.button.verticalPadding} ${ThemeVars.button.horizontalPadding}`,
    backgroundColor: ThemeVars.button.colorBg,
    color: ThemeVars.button.colorFg,
    ...textShadow,
    ...goldenHover,
}
