// https://github.com/mui/material-ui/blob/master/packages/mui-material/src/styles/createPalette.js
declare module "custom-mui-palette" {

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

    export type ColorPartial = Partial<Color>

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

    export type PaletteColorOptions = SimplePaletteColorOptions | ColorPartial

    /**
     * - `"@mui/material/styles/createPalette"`
     */
    export interface PaletteOptions {
        /**
         * Used to represent primary interface elements for a user.
         * It's the color displayed most frequently across your app's screens and components.
         */
        primary?: PaletteColorOptions
        /**
         * Used to represent secondary interface elements for a user.
         * It provides more ways to accent and distinguish your product.
         * Having it is optional.
         */
        secondary?: PaletteColorOptions
        /**
         * Used to represent interface elements that the user should be made aware of.
         */
        error?: PaletteColorOptions
        /**
         * Used to represent potentially dangerous actions or important messages.
         */
        warning?: PaletteColorOptions
        /**
         * Used to present information to the user that is neutral and not necessarily important.
         */
        info?: PaletteColorOptions
        /**
         * Used to indicate the successful completion of an action that user triggered.
         */
        success?: PaletteColorOptions
        /**
         * The palette mode, can be "light" or "dark".
         */
        mode?: "light" | "dark"
        /**
         * Used by the functions below to shift a color's luminance by approximately two indexes within its tonal palette.
         */
        tonalOffset?: number | { light: number; dark: number }
        /**
         * Used by `getContrastText()` to maximize the contrast between the background and the text.
         */
        contrastThreshold?: number
        /**
         * A collection of common colors.
         * Use standalone interface over typeof colors/commons to enable module augmentation.
         *
         * - `"@mui/material/styles/createPalette"`
         * - [CommonColors](https://github.com/mui/material-ui/blob/97427f0ca0ef29fd5f942080c959f6827ccb641f/packages/mui-material/src/styles/createPalette.d.ts#L6-L9)
         */
        common?: {
            black?: string
            white?: string
        }
        /**
         * The grey colors.
         */
        grey?: ColorPartial
        /**
         * The colors used to style the text.
         *
         * [Partial<TypeText>](https://github.com/mui/material-ui/blob/97427f0ca0ef29fd5f942080c959f6827ccb641f/packages/mui-material/src/styles/createPalette.d.ts#L13-L17)
         */
        text?: {
            /** The most important text. */
            primary?: string
            /** Secondary text. */
            secondary?: string
            /** Disabled text have even lower visual prominence. */
            disabled?: string
        }
        /**
         * The color used to divide different elements.
         */
        divider?: string
        /**
         * The colors used to style the action elements.
         *
         * [Partial<TypeAction>](https://github.com/mui/material-ui/blob/97427f0ca0ef29fd5f942080c959f6827ccb641f/packages/mui-material/src/styles/createPalette.d.ts#L19-L31)
         */
        action?: {
            /** The color of an active action like an icon button. */
            active?: string
            activatedOpacity?: number
            /** The color of an hovered action. */
            hover?: string
            hoverOpacity?: number
            /** The color of a selected action. */
            selected?: string
            selectedOpacity?: number
            /** The color of a disabled action. */
            disabled?: string
            disabledOpacity?: number
            /** The background color of a disabled action. */
            disabledBackground?: string
            /** The color of a focused action. */
            focus?: string
            focusOpacity?: number
        }
        /**
         * The background colors used to style the surfaces.
         * Consistency between these values is important.
         *
         * [Partial<TypedBackground>](https://github.com/mui/material-ui/blob/97427f0ca0ef29fd5f942080c959f6827ccb641f/packages/mui-material/src/styles/createPalette.d.ts#L33-L36)
         */
        background?: {
            default?: string
            paper?: string
        }
    }

}
