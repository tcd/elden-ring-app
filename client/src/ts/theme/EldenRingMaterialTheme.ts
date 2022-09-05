import type { ThemeOptions } from "@mui/material"
import { createTheme } from "@mui/material"

import {
    breakpointsOptions,
    components,
    paletteOptions,
    typographyOptions,
} from "./mui"

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
