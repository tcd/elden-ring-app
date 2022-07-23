// import { logger } from "@app/util"
import { createTheme, Components, ThemeOptions } from "@mui/material"

import { generalComponents } from "./components"
import { paletteOptions } from "./paletteOptions"
import { breakpointsOptions } from "./breakpoints"
import {
    ExtendedTypographyOptions,
    typographyComponents,
    typographyOptions,
} from "./typography"

const components: Components = {
    ...generalComponents,
    ...typographyComponents,
}

const options: ThemeOptions = {
    palette: paletteOptions,
    typography: typographyOptions as ExtendedTypographyOptions,
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

// logger.debug(EldenRingMaterialTheme)
