import type { SxProps } from "@mui/material"

import { ThemeVars } from "@app/theme"

/** `.er__popover` */
const root: SxProps = {
    zIndex: ThemeVars.zIndex.popover,
    boxSizing: "border-box",
    /* top | right | bottom | left */
    padding: "5px 15px 5px 10px",
    color: ThemeVars.popover.colorFg,
    backgroundColor: ThemeVars.popover.colorBg,
    opacity: 0.90,
    border: `${ThemeVars.popover.borderSize} solid ${ThemeVars.popover.colorBorder}`,
    whiteSpace: "pre-wrap",
    fontSize: "18px",
}

export const ErTooltip = {
    root,
}
