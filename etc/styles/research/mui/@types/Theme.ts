import {
    Breakpoints,
    BreakpointsOptions,
    Direction,
    Palette,
    PaletteOptions,
    Shape,
    ShapeOptions,
    Spacing,
    SpacingOptions,
    TypographyOptions,
    ZIndex,
} from "."

// export interface ThemeOptions {
//     shape?: ShapeOptions
//     breakpoints?: BreakpointsOptions
//     direction?: Direction
//     // mixins?: unknown
//     // palette?: PaletteOptions
//     shadows?: unknown
//     spacing?: SpacingOptions
//     transitions?: unknown
//     components?: Record<string, any>
//     // typography?: unknown
//     // zIndex?: Record<string, number>
//
//     mixins?: MixinsOptions;
//     components?: Components<BaseTheme>;
//     palette?: PaletteOptions;
//     // shadows?: Shadows;
//     transitions?: TransitionsOptions;
//     typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
//     zIndex?: ZIndex;
// }

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
