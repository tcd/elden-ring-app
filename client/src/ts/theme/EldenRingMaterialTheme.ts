import { createTheme, Components, ThemeOptions } from "@mui/material"

import {
    breakpointsOptions,
    generalComponents,
    paletteOptions,
    typographyComponents,
    typographyOptions,
} from "./mui"

const components: Components = {
    ...generalComponents,
    ...typographyComponents,
}

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
