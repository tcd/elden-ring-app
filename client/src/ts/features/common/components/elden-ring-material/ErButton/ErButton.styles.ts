import type { SxProps } from "@mui/material"

import {
    ThemeVars,
    goldenHover,
} from "@app/theme"

const {
    button: vars,
} = ThemeVars

export const sx: SxProps = {
    position: "relative",
    borderRadius: "0px",
    border: `1px solid ${vars.borderColor}`,
    /** vertical, horizontal */
    padding: `${vars.verticalPadding} ${vars.horizontalPadding}`,
    backgroundColor: vars.colorBg,
    color: vars.colorFg,
    textShadow: ThemeVars.defaultTextShadow,
    ...goldenHover,
}
