import type { ThemeOptions } from "@mui/material"
import { createTheme } from "@mui/material"

import {
    components,
    paletteOptions,
} from "./mui"
import { breakpointsOptions } from "./variables/breakpoints"
import { typographyOptions } from "./variables/typography"

const options: ThemeOptions = {
    palette: paletteOptions,
    typography: typographyOptions,
    components: components,
    breakpoints: breakpointsOptions,
    direction: "ltr",
    // zIndex: undefined,
    // shadows: undefined,
    // shape: undefined,
    // spacing: undefined,
    // transitions: undefined,
    // mixins: undefined,
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
