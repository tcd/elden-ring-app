import { createTheme, Components, ThemeOptions } from "@mui/material"

import { palette } from "./palette"
import { typography, typographyComponents } from "./typography"
import { generalComponents } from "./components"

const components: Components = {
    ...generalComponents,
    ...typographyComponents,
}

const options: ThemeOptions = {
    palette,
    typography,
    components,
}

// =============================================================================
// Dark Mode
// =============================================================================

const darkModeOptions: ThemeOptions = {
    palette: {
        ...palette,
        mode: "dark",
    },
    typography,
    components,
}

// =============================================================================
// Light Mode
// =============================================================================

const lightModeOptions: ThemeOptions = {
    palette: {
        ...palette,
        mode: "light",
    },
    typography,
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
