import { createTheme } from "@mui/material"

import { breakpointsOptions } from "../variables/breakpoints"

const themeJustForBreakpoints = createTheme({ breakpoints: breakpointsOptions })

/**
 * [Material UI Breakpoint utilities](https://mui.com/material-ui/customization/breakpoints/#api)
 */
export const ThemeBreakpoints = themeJustForBreakpoints.breakpoints
