/**
 * A color with *light*, *dark*, and *accent* variants.
 *
 * ---
 *
 * |               |                |
 * | ------------- | :------------: |
 * |  `50 - 400`   |    lighter     |
 * |     `500`     | Original Color |
 * |  `600 - 900`  |     darker     |
 * | `A100 - A700` |     accent     |
 *
 * ---
 *
 * - Further Reading:
 *   - [The Material Design color system](https://material.io/design/color/the-color-system.html)
 *   - [What is the meaning of the prefix "A" in material design color guidelines?](https://graphicdesign.stackexchange.com/a/69470/93307)
 * - Tools
 *   - [Material Design Palette Generator](http://mcg.mbitson.com/#!?mcgpalette0=%2300deaf)
 *   - [~Material Palette Generator~](https://material.io/design/color/the-color-system.html#tools-for-picking-colors)
 *   - [~Material Color Tool~](https://material.io/resources/color/#!/?view.left=0&view.right=0)
 */
export interface Color {
      50: string;
     100: string;
     200: string;
     300: string;
     400: string;
     500: string;
     600: string;
     700: string;
     800: string;
     900: string;
    A100: string;
    A200: string;
    A400: string;
    A700: string;
}

// export type ColorVariantKey = keyof Color

/**
 * Use standalone interface over typeof colors/commons
 * to enable module augmentation
 *
 * - `"@mui/material/styles/createPalette"`
 *  - [source](https://github.com/mui/material-ui/blob/97427f0ca0ef29fd5f942080c959f6827ccb641f/packages/mui-material/src/styles/createPalette.d.ts#L42-L47)
 */
export interface SimplePaletteColorOptions {
    light?: string
    main: string
    dark?: string
    contrastText?: string
}

export interface PaletteColor {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
}

// export type ColorPartial = Partial<Color>

export type PaletteColorOptions =
    | SimplePaletteColorOptions
    | Partial<Color>
