/**
 * The colors used to style the action elements.
 *
 * [source](https://github.com/mui/material-ui/blob/97427f0ca0ef29fd5f942080c959f6827ccb641f/packages/mui-material/src/styles/createPalette.d.ts#L19-L31)
 */
export interface TypeAction {
    /** The color of an active action like an icon button. */
    active: string
    /** The color of a hovered action. */
    hover: string
    /** The opacity of a hovered action. */
    hoverOpacity: number
    /** The color of a selected action. */
    selected: string
    /** The opacity of a selected action. */
    selectedOpacity: number
    /** The color of a disabled action. */
    disabled: string
    /** The opacity of a disabled action. */
    disabledOpacity: number
    /** The background color of a disabled action. */
    disabledBackground: string
    /** The color of a focused action. */
    focus: string
    /** The opacity of a focused action. */
    focusOpacity: number
    /** Not sure on this one */
    activatedOpacity: number
}
