import { createTheme, Components, ThemeOptions } from "@mui/material"

import { generalComponents } from "./components"
import { paletteOptions } from "./paletteOptions"
import {
    typographyComponents,
    typographyOptions,
} from "./typography"

const components: Components = {
    ...generalComponents,
    ...typographyComponents,
}

const options: ThemeOptions = {
    palette: paletteOptions,
    typography: typographyOptions,
    components,
}

// =============================================================================
// Dark Mode
// =============================================================================

const darkModeOptions: ThemeOptions = {
    palette: {
        ...paletteOptions,
        mode: "dark",
    },
    typography: typographyOptions,
    components,
}

// =============================================================================
// Light Mode
// =============================================================================

const lightModeOptions: ThemeOptions = {
    palette: {
        ...paletteOptions,
        mode: "light",
    },
    typography: typographyOptions,
    components,
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
export const EldenRingMaterialTheme      = createTheme(options)
export const EldenRingMaterialThemeDark  = createTheme(darkModeOptions)
export const EldenRingMaterialThemeLight = createTheme(lightModeOptions)
