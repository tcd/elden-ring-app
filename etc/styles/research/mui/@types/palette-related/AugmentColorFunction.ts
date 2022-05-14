import {
    PaletteColor,
    PaletteColorOptions,
} from "."

export interface PaletteAugmentColorOptions {
    color: PaletteColorOptions;
    mainShade?: number | string;
    lightShade?: number | string;
    darkShade?: number | string;
    name?: number | string;
}

export type AugmentColorFunction =
    (options: PaletteAugmentColorOptions) => PaletteColor
