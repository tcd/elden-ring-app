import type { SxProps } from "@mui/material"

import { ThemeVars } from "@app/theme"

/**
 * This is meant to be applied to the most top level application component possible.
 *
 * When using `.scss`, it was applied to `#root.startingClassPage`.
 */
export const appRoot: SxProps = {
    backgroundImage: "none !important",
    // background: ThemeVars.startingClass.bgGradientColorLeft + " !important",
    background: ThemeVars.gradients.startingClassBackground + " !important",
}
