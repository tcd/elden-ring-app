import type { ThemeOptions } from "@mui/material"
import { createTheme } from "@mui/material"

import {
    components,
    paletteOptions,
    typographyOptions,
} from "./mui"
import { breakpointsOptions } from "./variables/breakpoints"

const options: ThemeOptions = {
    palette: paletteOptions,
    typography: typographyOptions,
    components: components,
    breakpoints: breakpointsOptions,
}

// =============================================================================
// Exports
// =============================================================================

/**
 * ## Material UI Docs:
 *
 * - [Palette](https://mui.com/customization/palette/)
 * - [Components](https://mui.com/customization/theme-components/)
 */
export const EldenRingMaterialTheme = createTheme(options)
export type IEldenRingMaterialTheme = typeof EldenRingMaterialTheme
