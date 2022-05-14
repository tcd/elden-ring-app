export type SpacingArgument = number | string;

/**
 * The different signatures imply different meaning for their arguments that can't be expressed structurally.
 * We express the difference with variable names.
 */
export interface Spacing {
    (): string;
    (
        value: number
    ): string;
    (
        topBottom: SpacingArgument,
        rightLeft: SpacingArgument,
    ): string;
    (
        top:       SpacingArgument,
        rightLeft: SpacingArgument,
        bottom:    SpacingArgument,
    ): string;
    (
        top:    SpacingArgument,
        right:  SpacingArgument,
        bottom: SpacingArgument,
        left:   SpacingArgument,
    ): string;
}

export type SpacingOptions =
    | number
    | Spacing
    | ((abs: number) => SpacingArgument)
    | ((abs: number | string) => SpacingArgument)
    | ReadonlyArray<SpacingArgument>;

