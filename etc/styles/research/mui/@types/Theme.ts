import {
    Breakpoints,
    BreakpointsOptions,
    Direction,
    PaletteOptions,
    Shape,
    ShapeOptions,
    Spacing,
    SpacingOptions,
    ZIndex,
} from "."

export interface ThemeOptions {
    shape?: ShapeOptions
    breakpoints?: BreakpointsOptions
    direction?: Direction
    mixins?: unknown
    palette?: PaletteOptions
    shadows?: unknown
    spacing?: SpacingOptions
    transitions?: unknown
    components?: Record<string, any>
    typography?: unknown
    zIndex?: Record<string, number>
}

export interface Theme {
    shape: Shape
    /** packages\mui-system\src\createTheme\createBreakpoints.d.ts */
    breakpoints: Breakpoints
    direction: Direction
    palette: Record<string, any> & { mode: 'light' | 'dark' }
    shadows?: unknown
    spacing: Spacing
    transitions?: unknown
    components?: Record<string, any>
    mixins?: unknown
    typography?: unknown
    zIndex?: ZIndex
}
